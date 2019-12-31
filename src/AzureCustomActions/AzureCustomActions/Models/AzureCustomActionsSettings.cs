using System;
using System.Collections.Generic;
using System.Text;

namespace AzureCustomActions.Models
{
    public class AzureCustomActionsSettings
    {
        public string ScriptFolder { get; set; }
        public List<AzureCustomAction> Actions { get; set; }
    }
    public class AzureCustomAction
    {
        public string ActionType { get; set; }
        public string ActionData { get; set; }
        public string ShowOnURL { get; set; }
        public string Name { get; set; }
    }
}
