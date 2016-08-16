import { expect } from 'chai';
import { Sickness } from '../src/narratives';

describe('Sickness', function(){
    let sickness;

    beforeEach(function() {
        sickness = new Sickness();
    })

    it('contains hello', function(){
        expect(sickness.hello()).to.contains('hello');
    });
});
