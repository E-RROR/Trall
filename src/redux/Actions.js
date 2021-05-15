export function ChangeLoad() {
    return {
        type: 'LOAD',
    }
};

export function CreateLesson(name) {
    return {
        type: 'CREATE',
        payload: name
    }
};
