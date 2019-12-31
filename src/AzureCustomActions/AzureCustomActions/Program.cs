using AzureCustomActions.Models;
using AzureCustomActions.Repository;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.IO;

namespace AzureCustomActions
{
    class Program
    {
        static void Main(string[] args)
        {
            var settingsBuilder = new ConfigurationBuilder()
                        .SetBasePath(Directory.GetCurrentDirectory())
                        .AddJsonFile("appsettings.json",optional:true, reloadOnChange:true);
            IConfigurationRoot config = settingsBuilder.Build();

            var acaSettings = new AzureCustomActionsSettings();
            config.GetSection("AzureCustomActions").Bind(acaSettings);

            var nm = new NativeMessaging();
            JObject data;
            while((data = nm.Read()) != null)
            {
                var processedMessage = nm.ProcessMessage(data);

            }
        }
    }
}
