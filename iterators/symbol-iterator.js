const { format, parse, addDays, differenceInDays } = require('date-fns')
const dateRange = {
  from: '01-01-2020',
  to: '15-01-2020',

  [Symbol.iterator]: function () {
    let currentDayIndex = 0
    const diff = differenceInDays(
      parse(this.to, 'dd-MM-yyyy', new Date()),
      parse(this.from, 'dd-MM-yyyy', new Date())
    )
    return {
      next: () => {
        if (currentDayIndex <= diff) {
          const day = format(
            addDays(
              parse(this.from, 'dd-MM-yyyy', new Date()),
              currentDayIndex
            ),
            'dd-MM-yyyy'
          )
          currentDayIndex++
          return {
            done: false,
            value: day,
          }
        } else {
          return {
            done: true,
          }
        }
      },
    }
  },
}

for (let date of dateRange) {
  console.log(date)
}
