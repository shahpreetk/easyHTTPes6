class EasyHTTP {
    // MAKE AN HTTP GET REQUEST
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    // MAKE AN HTTP POST REQUEST
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    // MAKE AN HTTP PUT REQUEST
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}