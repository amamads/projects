export default interface User {
    id: string,
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    birthDate: Date | null,
    maritalStatus: string,
    phone: string | null,
    role: string
}
// gender: 'male' | 'female',
// maritalStatus: 'single' | 'married',
// role: 'admin' | 'user'