import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
// import type { Handler } from '@aws-cdk/aws-lambda'
import { createBuiltMeshHTTPHandler } from '../.mesh'

interface ServerContext {
    event: APIGatewayEvent
    lambdaContext: Context
}

const meshHTTP = createBuiltMeshHTTPHandler<ServerContext>()

export async function handler(
    event: APIGatewayEvent,
    lambdaContext: Context
): Promise<APIGatewayProxyResult> {
    const url = new URL(event.path, 'http://localhost')
    if (event.queryStringParameters != null) {
        for (const name in event.queryStringParameters) {
            const value = event.queryStringParameters[name]
            if (value != null) {
                url.searchParams.set(name, value)
            }
        }
    }

    const response = await meshHTTP.fetch(
        url,
        {
            // For v1.0 you should use event.httpMethod
            method: event.httpMethod,
            headers: event.headers as HeadersInit,
            body: event.body
                ? Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8')
                : undefined
        },
        {
            event,
            lambdaContext
        }
    )

    const responseHeaders: Record<string, string> = Object.fromEntries(response.headers.entries())

    return {
        statusCode: response.status,
        headers: responseHeaders,
        body: await response.text(),
        isBase64Encoded: false
    }
}
