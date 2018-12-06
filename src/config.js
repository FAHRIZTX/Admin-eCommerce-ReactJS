export const url = "http://10.10.10.59:8888"

export function headers(token) {
    return(
        {   
            headers: {
            'Authorization' : `Bearer ${token}`,
            'Content-Type': 'application/json',
            }
        }
    )
}