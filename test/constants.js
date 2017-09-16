export default {
    validAuthHeader: 'Basic YWRtaW46YWRtaW4=',
    invalidAuthHeader: 'Whatever',
    validUser: {
        username: 'testUser',
        password: 'aA12345678&'
    },
    invalidUser: {
        password: 'aA12345678&'
    },
    userWithWeakPassword: {
        username: 'testUser',
        password: '1234'
    },
    doorOpenedEvent: {
        creator: {
            username: 'mmontes',
            device: 'raspberry'
        },
        relatedEntities: [
            {
                name: 'Home',
                type: 'building',
                geometry: {
                    type: 'Point',
                    coordinates: [125.6, 10.1]
                }
            }
        ],
        type: 'door_opened',
        duration: {
            units: 's',
            value: 2.4
        }
    },
    doorClosedEvent: {
        creator: {
            username: 'mmontes',
            device: 'raspberry'
        },
        relatedEntities: [
            {
                name: 'Home',
                type: 'building',
                geometry: {
                    type: 'Point',
                    coordinates: [125.6, 10.1]
                }
            }
        ],
        type: 'door_closed',
        duration: {
            units: 's',
            value: 2.4
        }
    },
    doorClosedEvent2: {
        creator: {
            username: 'mmontes',
            device: 'arduino'
        },
        relatedEntities: [
            {
                name: 'Home',
                type: 'building',
                geometry: {
                    type: 'Point',
                    coordinates: [125.6, 10.1]
                }
            }
        ],
        type: 'door_closed',
        duration: {
            units: 's',
            value: 2.4
        }
    },
    windowOpenedEvent: {
        creator: {
            username: 'mmontes',
            device: 'raspberry'
        },
        relatedEntities: [
            {
                name: 'Home',
                type: 'building',
                geometry: {
                    type: 'Point',
                    coordinates: [125.6, 10.1]
                }
            }
        ],
        type: 'window_opened',
        duration: {
            units: 's',
            value: 2.4
        }
    },
    inValidEvent: {
        device: 'raspberry',
        relatedEntities: []
    },
    temperatureMeasurement: {
        device: 'raspberry',
        relatedEntities: [
            {
                name: 'Home',
                type: 'building',
                geometry: {
                    type: 'Point',
                    coordinates: [125.6, 10.1]
                }
            }
        ],
        type: 'temperature',
        units: 'degrees',
        value: 10
    },
    temperatureMeasurement2: {
        device: 'raspberry',
        relatedEntities: [
            {
                name: 'Home',
                type: 'building',
                geometry: {
                    type: 'Point',
                    coordinates: [125.6, 10.1]
                }
            }
        ],
        type: 'temperature',
        units: 'degrees',
        value: 15
    },
    humidityMeasurement: {
        device: 'raspberry',
        relatedEntities: [
            {
                name: 'Home',
                type: 'building',
                geometry: {
                    type: 'Point',
                    coordinates: [125.6, 10.1]
                }
            }
        ],
        type: 'humidity',
        units: 'relative',
        value: 0.3
    },
    humidityMeasurement2: {
        device: 'raspberry',
        relatedEntities: [
            {
                name: 'Home',
                type: 'building',
                geometry: {
                    type: 'Point',
                    coordinates: [125.6, 10.1]
                }
            }
        ],
        type: 'humidity',
        units: 'relative',
        value: 0.6
    },
    inValidMeasurement: {
        device: 'raspberry',
        relatedEntities: []
    },
};