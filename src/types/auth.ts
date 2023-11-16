export interface ICredential {
    accessToken: string;
    refreshToken: string;
    expiresIn: Date;
}

export interface IGoogleLoginUrl {
    url: string;
}
