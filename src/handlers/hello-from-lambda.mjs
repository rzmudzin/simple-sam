/**
 * A Lambda function that returns a static string
 */
// export const helloFromLambdaHandler = async () => {
//     // If you change this message, you will need to change hello-from-lambda.test.mjs
//     const message = 'Simple Sam says waazzzuuupp from Lambda bitches!';

//     // All log statements are written to CloudWatch
//     console.info(`${message}`);
    
//     return message;
// }

export const helloFromLambdaHandler = async (event, context) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hello world from first local lambda',
      })
    };

    return response;
  };