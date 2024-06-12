import { getSpecial } from "./destructuring"


test('destructuring', () => {
    const obj1 = {
        special: [
            {
              description: 'Двойной выстрел наносит двойной урон'
            }, 
        ]
    }

    const obj2 = {
        special: [
            {
             
            }, 
        ]
    }

    const obj3 = {
        special: [
            {
             description: '',
            }, 
        ]
    }
  expect(() => getSpecial()).toThrow("Cannot destructure property 'special' of 'undefined' as it is undefined.")
  expect(getSpecial(obj1)[0]).toEqual({description: 'Двойной выстрел наносит двойной урон'})
  expect(getSpecial(obj2)[0]).toEqual({description: 'Описание недоступно'})
  expect(getSpecial(obj3)[0]).toEqual({description: 'Описание недоступно'})
})

