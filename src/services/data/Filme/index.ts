import { IFilmeData, IFilmeForm } from "interfaces/filme.interface";
import api from "services/data/api";

class MessageData {
  index() {
    return api.get<IFilmeData[]>('/messages')
  }
  store(data: IFilmeForm) {
    return api.post(`/messages`, data)
  }
  show(id: number) {
    return api.get<IFilmeData>(`/messages/${id}`)
  }
  update(id: number, data: IFilmeForm) {
    return api.put(`/messages/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/messages/${id}`)
  }
}

export default new MessageData()