using AzureCustomActions.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AzureCustomActions.Repository
{
    public class PerformAction
    {
        private NativeMessaging _nm;
        private NativeMessage _message;
        public PerformAction()
        {
            _nm = new NativeMessaging();
        }
        public void StartAction(NativeMessage message)
        {
            _message = message;
            switch (_message.Action)
            {
                case "GetActions":
                    
                    break;
                default:
                    break;
            }
        }
        public void GetActions()
        {
            
        }
    }
}
