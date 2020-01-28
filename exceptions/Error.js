class NotFound extends Error {
    constructor(message, status = 404) {
        super(message)

        this.status = status
    }
}

class ServiceUnavailable extends Error {
    constructor(message, status = 503) {
        super(message)

        this.status = status
    }
}

module.exports = {
    ServiceUnavailable,
    NotFound,
}