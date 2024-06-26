import { supabase } from '../supabaseClient';

const userMethods = {
    async addUser(email, password) {
        const response = await supabase.auth.signUp({
            email: email,
            password: password
        });

        return response;
    },
    async signIn(email, password) {
        const response = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        return response;
    },
    async signOut() {
        return await supabase.auth.signOut();
    },
    async sendResetPasswordEmail(email) {
        return await supabase.auth.resetPasswordForEmail(email, {redirectTo: 'https://attributesofgod.org/resetpassword'});
    },
    async updatePassword(newPassword) {
        const response = await supabase.auth.updateUser({ password: newPassword });
        return response;
    },
    async getUser() {
        const response = await supabase.auth.getUser();

        return response.data.user;
    },
    async getUserEmail() {
        let email = null;

        await this.getUser().then(obj => {
            if (obj.error === null) {
                email = obj.data.user.email;
            } else {
                console.log(obj.error)
            }
        });

        return email;
    },
    async getUserQuiz(userId) {
        const { data, error } = await supabase
            .from('userQuiz')
            .select()
            .eq('userId', userId);

        if (error) {
            console.log("error", error);
        }

        return data;
    },
    async addUserQuizQuestion(userId, questionId, questionValue) {
        const { error } = await supabase
            .from('userQuiz')
            .upsert({ questionId: questionId, questionValue: questionValue, userId: userId },
                    { onConflict: ['questionId', 'userId'] }
            );
        if (error) {
            console.log("error", error);
        }
    }
}

export default userMethods;