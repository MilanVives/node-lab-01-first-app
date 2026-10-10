const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const quotes = require('../quotes.js');

function run(input) {
  return spawnSync(process.execPath, ['groups.js'], { input, encoding: 'utf8', timeout: 5000 });
}

describe('R1: groups.js prints the group for a date of birth', () => {
  it('asks for the date of birth', () => {
    const r = run('20201010\n');
    assert.ok(r.stdout.includes('Insert date of birth (YYYYMMDD):'), 'groups.js should ask "Insert date of birth (YYYYMMDD): "');
  });
  it('prints group 4 for 20201010', () => {
    assert.ok(run('20201010\n').stdout.includes('You are assigned to group 4'), 'For 20201010 the output should contain "You are assigned to group 4" (20201010 % 7 = 4)');
  });
  it('prints group 2 for 20000101', () => {
    assert.ok(run('20000101\n').stdout.includes('You are assigned to group 2'), 'For 20000101 the output should contain "You are assigned to group 2"');
  });
});

describe('R2: groups.js prints the quote of the day for that group', () => {
  it('prints the heading and the quote from quotes.js', () => {
    const out = run('20051115\n').stdout;
    assert.ok(out.includes('Your quote of the day is:'), 'The output should contain "Your quote of the day is:"');
    assert.ok(out.includes(quotes[0]), 'For group 0 the output should contain quotes[0] from quotes.js');
  });
  it('uses the group number as index', () => {
    assert.ok(run('19991231\n').stdout.includes(quotes[1]), 'For 19991231 (group 1) the output should contain quotes[1]');
  });
});

describe('R3: groups.js rejects an invalid date of birth', () => {
  for (const input of ['abc', '2020101', '202010100']) {
    it(`rejects "${input}"`, () => {
      const r = run(`${input}\n`);
      assert.ok(r.stdout.includes('Invalid date of birth'), `For "${input}" the output should contain "Invalid date of birth" (exactly 8 digits are required)`);
      assert.equal(r.status, 1, `For "${input}" the program should exit with code 1 (use process.exitCode = 1)`);
    });
  }
});
