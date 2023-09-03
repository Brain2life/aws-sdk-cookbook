const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");

const ssmClient = new SSMClient({ region: "us-east-1" });

// Fetch a String parameter
const getStringParameter = async () => {
  const params = {
    Name: "myStringParameter"
  };
  const command = new GetParameterCommand(params);
  const response = await ssmClient.send(command);
  console.log("String Parameter:", response.Parameter.Value);
};

// Fetch a StringList parameter
const getStringListParameter = async () => {
  const params = {
    Name: "myStringListParameter"
  };
  const command = new GetParameterCommand(params);
  const response = await ssmClient.send(command);
  const values = response.Parameter.Value.split(",");
  console.log("String List Parameters:", values);
};

// Fetch a SecureString parameter
const getSecureStringParameter = async () => {
  const params = {
    Name: "mySecureStringParameter",
    WithDecryption: true
  };
  const command = new GetParameterCommand(params);
  const response = await ssmClient.send(command);
  console.log("Secure String Parameter:", response.Parameter.Value);
};

// Uncomment these function calls to test
getStringParameter();
getStringListParameter();
getSecureStringParameter();
