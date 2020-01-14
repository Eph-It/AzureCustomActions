using AzureCustomActions.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace AzureCustomActions.Repository
{
    public class PerformAction
    {
        private NativeMessaging _nm;
        private NativeMessage _message;
        private AzureCustomActionsSettings _settings;
        public PerformAction(AzureCustomActionsSettings settings)
        {
            _nm = new NativeMessaging();
            _settings = settings;
        }
        public void StartAction(NativeMessage message)
        {
            _message = message;
            switch (_message.Action)
            {
                case "GetActions":
                    GetActions();
                    break;
                default:
                    break;
            }
        }
        public void GetActions()
        {
            var strActions = JsonConvert.SerializeObject(_settings.Actions);
            _nm.Write(strActions);
        }
    }
}
