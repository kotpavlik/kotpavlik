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
    }
};

export const AboutUsAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(response => {
            return response.data
        });

    }
}


// в этом файле мы создаём API подключение и выносим его из всевозможных компонент 
// что бы небыло дублирования кода используем объект const instance = axios.create 
// полсле чего создем нужные нам объекты и передаём в них нужные параметры можно поставить значение по умолчиниюgetUsers (currentPage = 1, pageSize)
// baseURL: `https://social-network.samuraijs.com/api/1.0/` - подставляется автоматически
// из response возвращаем только data