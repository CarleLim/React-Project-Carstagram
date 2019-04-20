
const myFriendsList = {
    박현철: {
        사는곳: "창원",
        알게된경로: "중학교",
        나이: 28
    },
    이희건: {
        사는곳: "창원",
        알게된경로: "중학교",
        나이: 28
    },
    안성은: {
        사는곳: "서울",
        알게된경로: "박현철",
        나이: 28
    },
    정영운: {
        사는곳: "서울",
        알게된경로: "박현철",
        나이: 28
    },
    권혁재: {
        사는곳: "서울",
        알게된경로: "경찰특공대",
        나이: 28
    },
    조영현: {
        사는곳: "부산",
        알게된경로: "해병대",
        나이: 28
    },
}

const getProperty = (obj, key) => {
    if (obj) {
        return obj[key]
    }
    return null;
}

console.log(getProperty(myFriendsList, "박현철"))