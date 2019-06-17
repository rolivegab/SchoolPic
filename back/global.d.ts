declare namespace NodeJS {
    export interface ProcessEnv {
        PORT: number
        MYSQL_USER: string
        MYSQL_PASSWORD: string
        MYSQL_DB: string
    }
}