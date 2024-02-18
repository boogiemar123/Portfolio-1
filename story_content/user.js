function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6VoX4swtlGQ":
        Script1();
        break;
      case "5mbBOxAX8SC":
        Script2();
        break;
      case "5W0XD0NJDNa":
        Script3();
        break;
      case "6WnUC4V0Akk":
        Script4();
        break;
      case "6CqhqIvqeEd":
        Script5();
        break;
      case "5fhTQbgf4uI":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6OxGjkWqU2B');
const duration = 5000;
const easing = 'ease-out';
const id = '6g85vz6S40f';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6iQ6frOVo3s');
const duration = 2000;
const easing = 'ease-out';
const id = '6NZsayDEuW9';
const shakeAmount = 2;
const delay = 2000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6kxLKnuKEgG');
const duration = 2000;
const easing = 'ease-out';
const id = '6LVqgWLPyc6';
const shakeAmount = 2;
const delay = 2000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('5nCliX4sdGT');
const duration = 1000;
const easing = 'ease-out';
const id = '5YBofnGCOuE';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5oPl8oaqMNb');
const duration = 1000;
const easing = 'ease-out';
const id = '6BNAx7ZgnGt';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6fniuJXeqva');
const duration = 1000;
const easing = 'ease-out';
const id = '5kK6XoyJFww';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
