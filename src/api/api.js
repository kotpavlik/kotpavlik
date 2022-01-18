import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "d29f106d-431e-4e24-b36e-8c4bcc59630f"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    }
};

export const followAPI = {
    postFollow(id) {
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data
        });
    },
    deleteUnfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        });
    }
};

export const userAuthAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => {
            return response
        });
    },
    loginApi(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe }).then(response => {
            return response
        });
    },
    logoutApi() {
        return instance.delete(`auth/login`).then(response => {
            return response
        });
    }

};

export const AboutUsAPI = {
    getProfile(userId) {
        console.warn('Please use method AboutUsProfileAPI')
        return AboutUsProfileAPI.getProfile(userId)
    }
};

export const AboutUsProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(response => {
            return response.data
        });
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId).then(response => {
            return response.data
        });
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status }).then(response => {
            return response.data
        });
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response.data
        });
    },
    saveProfileDataApi(fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts) {

        return instance.put(`profile`, { fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts }).then(response => {
            return response.data
        });
    },
};


// в этом файле мы создаём API подключение и выносим его из всевозможных компонент 
// что бы небыло дублирования кода используем объект const instance = axios.create 
// полсле чего создем нужные нам объекты и передаём в них нужные параметры можно поставить значение по умолчиниюgetUsers (currentPage = 1, pageSize)
// baseURL: `https://social-network.samuraijs.com/api/1.0/` - подставляется автоматически
// из response возвращаем только data