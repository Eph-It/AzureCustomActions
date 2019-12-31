using System;
using System.Collections.Generic;
using System.Text;

namespace AzureCustomActions.Models
{
    public class NativeMessage
    {
        public string Action { get; set; }
        public string Url { get; set; }
        public string Params { get; set; }
    }
}
