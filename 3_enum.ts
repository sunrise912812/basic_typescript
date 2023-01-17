enum Membership{
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart // возвращает индекс
const membershipReverse = Membership[2] // возвращает значение

console.log(membership)
console.log(membershipReverse)

enum SocialMedia{
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)