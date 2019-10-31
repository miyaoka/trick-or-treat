import { trickOrTreat, trickOrTreat2, trickOrTreat3 } from '~/trick'

type CheckItem = {
  desc: string
  params: {
    trick: boolean
    treat: boolean
    tobe: boolean
  }
}
type CheckPayload = {
  fn: Function
  item: CheckItem
}
const check = ({
  fn,
  item: {
    desc,
    params: { trick, treat, tobe }
  }
}: CheckPayload) => {
  test(desc, () => {
    expect(fn(trick, treat)).toBe(tobe)
  })
}

const checkList: CheckItem[] = [
  {
    desc: 'お菓子をくれないなら何もしない -> false',
    params: { trick: false, treat: false, tobe: false }
  },
  {
    desc: 'お菓子をくれるなら何もしない -> true',
    params: { trick: false, treat: true, tobe: true }
  },
  {
    desc: 'お菓子をくれないといたずらする -> true',
    params: { trick: true, treat: false, tobe: true }
  },
  {
    desc: 'お菓子をくれてもいたずらする -> false',
    params: { trick: true, treat: false, tobe: false }
  }
]

describe('trick or treat', () => {
  checkList.forEach(item => check({ fn: trickOrTreat, item }))
})
describe('trick xor treat or treat', () => {
  checkList.forEach(item => check({ fn: trickOrTreat2, item }))
})
describe('treat or trick', () => {
  checkList.forEach(item => check({ fn: trickOrTreat3, item }))
})
