using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using AzureCustomActions.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AzureCustomActions.Repository
{
    public class NativeMessaging
    {
        public NativeMessage ProcessMessage(JObject data)
        {
            var strData = data["text"].Value<string>();
            return JsonConvert.DeserializeObject<NativeMessage>(strData);
        }
        public JObject Read()
        {
            var stdin = Console.OpenStandardInput();
            var length = 0;
            var lengthBytes = new byte[4];
            stdin.Read(lengthBytes, 0, 4);
            length = BitConverter.ToInt32(lengthBytes, 0);

            var buffer = new char[length];

            using(var reader = new StreamReader(stdin))
            {
                while(reader.Peek() >= 0)
                {
                    reader.Read(buffer, 0, buffer.Length);
                }
            }
            return (JObject)JsonConvert.DeserializeObject<JObject>(new string(buffer));
        }
        public void Write(JToken data)
        {
            var json = new JObject();
            json["data"] = data;

            var bytes = System.Text.Encoding.UTF8.GetBytes(json.ToString(Formatting.None));

            var stdout = Console.OpenStandardOutput();
            stdout.WriteByte((byte)((bytes.Length >> 0) & 0xFF));
            stdout.WriteByte((byte)((bytes.Length >> 8) & 0xFF));
            stdout.WriteByte((byte)((bytes.Length >> 16) & 0xFF));
            stdout.WriteByte((byte)((bytes.Length >> 24) & 0xFF));
            stdout.Write(bytes, 0, bytes.Length);
            stdout.Flush();
        }
    }
}
