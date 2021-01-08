import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import ColorPayload from './payloads/ColorPayload'
import HidePayload from './payloads/HidePayload'
import LogPayload from './payloads/LogPayload'
import NewScreenPayload from './payloads/NewScreenPayload'
import RemovePayload from './payloads/RemovePayload'
import SizePayload from './payloads/SizePayload'
import NotifyPayload from './payloads/NotifyPayload'
import CustomPayload from './payloads/CustomPayload'

class Ray {
    static client

    constructor(host = '127.0.0.1', port = 23517) {
        this.uuid = uuidv4()
        this.client = axios.create({
            baseURL: `http://${host}:${port}/`,
        })
    }

    newScreen(name = '') {
        this.sendRequest(NewScreenPayload(name))

        return this
    }

    clearScreen() {
        return this.newScreen()
    }

    color(color) {
        this.sendRequest(ColorPayload(color))

        return this
    }

    size(size) {
        this.sendRequest(SizePayload(size))

        return this
    }

    remove() {
        this.sendRequest(RemovePayload())

        return this
    }

    hide() {
        this.sendRequest(HidePayload())

        return this
    }

    notify(text) {
        this.sendRequest(NotifyPayload(text))

        return this
    }

    die() {
        process.exit()
    }

    showWhen(boolOrFunc) {
        if (typeof boolOrFunc == 'function') boolOrFunc = boolOrFunc()

        if (!boolOrFunc) this.remove()

        return this
    }

    showIf(boolOrFunc) {
        return this.showWhen(boolOrFunc)
    }

    removeWhen(boolOrFunc) {
        if (typeof boolOrFunc == 'function') boolOrFunc = boolOrFunc()

        if (boolOrFunc) this.remove()

        return this
    }

    removeIf(boolOrFunc) {
        return this.removeWhen(boolOrFunc)
    }

    ban() {
        return this.send('🕶')
    }

    charles() {
        return this.send('🎶 🎹 🎷 🕺')
    }

    send(...values) {
        if (values.length == 0) return this

        this.sendRequest(LogPayload(...values))

        return this
    }

    pass(value) {
        this.send(value)

        return value
    }

    sendCustom(content, label = '') {
        this.sendRequest(CustomPayload(content, label))

        return this
    }

    sendRequest(...payloads) {
        this.client.post('/', {
            uuid: this.uuid,
            payloads: payloads.map(payload => {
                payload.origin = {
                    file: '/some/path/here.js',
                    line_number: 1,
                }

                return payload
            }),
            meta: [],
        })
    }
}

export const ray = (...args) => new Ray().send(...args)

export default Ray
