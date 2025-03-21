export interface AccessToken {
    status: string,
    access_token: string
}

export interface LoggedInUserDetails{
    id: string, // could be an int not really sure tbh
    first_name: string,
    last_name: string,
    user_name: string,
    email: string,
    phone: string,
}

export type State = { username: string, id : string}
