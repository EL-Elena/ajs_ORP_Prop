import orderByProps from '../index';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const correct = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

test('Checking function orderByProps', () => {
  expect(orderByProps(obj, ['name', 'level'])).toEqual(correct);
});
