const getMonths = () => {
    return [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
    ]
}

const getYears = (amount) => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    const years = []

    for (let i = 0; i <= amount; i += 1) {
        years.push(currentYear + i)
    }

    return years
}

export {
    getMonths,
    getYears,
}
