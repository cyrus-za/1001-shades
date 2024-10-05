const URL = 'https://webhooks.stubber.com/im/2024-10-05-XXXX-RXE9/create_a_new_stub_with_1001_shades'

export async function POST(req: Request) {
  const data = await req.json()
  data.mobileNumber = data.mobileNumber.replace(/\s+/g, '').replace('+', '')
  
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  console.log(response)
  return new Response('OK')
}
