
// Setter and Getter funcs: toggles/gets "active" on and off based on truth value/returns truth value

function setActive(id, active) {

    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', active);
}

function getActive(id) {

    const el = document.getElementById(id);
    return el ? el.classList.contains('active') : false;
}

// Setter for text content inside of the svg text element

function setContent(id, content) {

    const el = document.getElementById(id);
    if (el) el.textContent = content;
}

function setSelect(id, select) {

    const el = document.getElementById(id);
    if (el) el.classList.toggle('select', select);
}

function setError(id, error) {

    const el = document.getElementById(id);
    if (el) el.classList.toggle('err', error);
}


// Circuit 0: TRANSISTOR

const switchA0 = document.getElementById('switchA0');
const lamp0 = document.getElementById('lamp0');

function updateCircuit0() {

    const on = switchA0.classList.contains('on');

    setActive('wireB0', on);
    setActive('wireB0_2', on);
    setActive('wireOutA0', on);
    setActive('wireOutA0_2', on);

    lamp0.classList.toggle('on', on);
}

switchA0.addEventListener('click', () => {

    switchA0.classList.toggle('on');
    updateCircuit0();
});


// Circuit 1: INVERTER gate

const switchA1 = document.getElementById('switchA1');
const lamp1 = document.getElementById('lamp1');

function updateCircuit1() {

    const on = switchA1.classList.contains('on');
    const out = !on;


    setActive('wireB1', on);
    setActive('wireB1_2', on);
    setActive('wireA1', on);
    setActive('wireA1_2', on);
    setActive('wireOutA1', on);
    setActive('wireOutA1_2', on);

    setActive('wireSourceB1', out);
    setActive('wireSourceB1_2', out);
    setActive('wireOutB1', out);
    setActive('wireOutB1_2', out);

    lamp1.classList.toggle('on', out);
}

switchA1.addEventListener('click', () => {

    switchA1.classList.toggle('on');
    updateCircuit1();
});


// Circuit 2: AND gate

const switchA2 = document.getElementById('switchA2');
const switchB2 = document.getElementById('switchB2');
const lamp2 = document.getElementById('lamp2');

function updateCircuit2() {

    const a = switchA2.classList.contains('on');
    const b = switchB2.classList.contains('on');
    const out = a && b;

    setActive('wireB2', a);
    setActive('wireB2_2', a);
    setActive('wireOutA2', a);
    setActive('wireOutA2_2', a);

    setActive('wireC2', a);
    setActive('wireC2_2', a);

    setActive('wireD2', b);
    setActive('wireD2_2', b);

    setActive('wireOutB2', out);
    setActive('wireOutB2_2', out);

    lamp2.classList.toggle('on', out);
}

switchA2.addEventListener('click', () => {

    switchA2.classList.toggle('on');
    updateCircuit2();
});

switchB2.addEventListener('click', () => {

    switchB2.classList.toggle('on');
    updateCircuit2();
});


// Circuit 3: OR gate

const switchA3 = document.getElementById('switchA3');
const switchB3 = document.getElementById('switchB3');
const lamp3 = document.getElementById('lamp3');

function updateCircuit3() {

    const a = switchA3.classList.contains('on');
    const b = switchB3.classList.contains('on');
    const out = a || b;

    setActive('wireB3', a);
    setActive('wireB3_2', a);
    setActive('wireOutA3', a);
    setActive('wireOutA3_2', a);

    setActive('wireD3', b);
    setActive('wireD3_2', b);
    setActive('wireOutB3', b);
    setActive('wireOutB3_2', b);

    setActive('wireOutC3_top', a);
    setActive('wireOutC3_bot', b);
    setActive('wireOutC3_2', out);

    lamp3.classList.toggle('on', out);
}

switchA3.addEventListener('click', () => {

    switchA3.classList.toggle('on');
    updateCircuit3();
});

switchB3.addEventListener('click', () => {

    switchB3.classList.toggle('on');
    updateCircuit3();
});


// Circuit 4: NAND gate

const switchA4 = document.getElementById('switchA4');
const switchB4 = document.getElementById('switchB4');
const lamp4 = document.getElementById('lamp4');

function updateCircuit4() {

    const a = switchA4.classList.contains('on');
    const b = switchB4.classList.contains('on');
    const out1 = a && b;

    const out = !out1;

    setActive('wireB4', a);
    setActive('wireB4_2', a);

    setActive('wireD4', b);
    setActive('wireD4_2', b);

    setActive('wireA4', out1);
    setActive('wireA4_2', out1);
    setActive('wireOutA4', out1);
    setActive('wireOutA4_2', out1);
    setActive('wireC4', out1);
    setActive('wireC4_2', out1);
    setActive('wireOutB4', out1);
    setActive('wireOutB4_2', out1);

    setActive('wireSourceB4', out);
    setActive('wireSourceB4_2', out);
    setActive('wireOutC4', out);
    setActive('wireOutC4_2', out);


    lamp4.classList.toggle('on', out);
}

switchA4.addEventListener('click', () => {

    switchA4.classList.toggle('on');
    updateCircuit4();
});

switchB4.addEventListener('click', () => {

    switchB4.classList.toggle('on');
    updateCircuit4();
});


// Circuit 5: XOR gate

const switchA5 = document.getElementById('switchA5');
const switchB5 = document.getElementById('switchB5');
const lamp5 = document.getElementById('lamp5');

function updateCircuit5() {

    const a = switchA5.classList.contains('on');
    const b = switchB5.classList.contains('on');

    const outA1 = !a;
    const outB1 = !b;

    const outA2 = a && outB1;
    const outB2 = outA1 && b;

    const out = outA2 || outB2;

    setActive('wireB5', a);
    setActive('wireB5_2', a);
    setActive('wireC5', a);
    setActive('wireC5_2', a);
    setActive('wireN5', a);
    setActive('wireN5_2', a);
    setActive('wireConnectorA5', a);
    setActive('wireOutA5', a);
    setActive('wireOutA5_2', a);
    setActive('wireOutG5', a);
    setActive('wireOutG5_2', a);

    setActive('wireJ5', b);
    setActive('wireJ5_2', b);
    setActive('wireF5', b);
    setActive('wireF5_2', b);
    setActive('wireConnectorB5', b);
    setActive('wireOutC5', b);
    setActive('wireOutC5_2', b);


    setActive('wireL5', outA1);
    setActive('wireL5_2', outA1);
    setActive('wireOutF5', outA1);
    setActive('wireOutF5_2', outA1);
    setActive('wireI5', outA1);
    setActive('wireI5_2', outA1);

    setActive('wireD5', outB1);
    setActive('wireD5_2', outB1);

    setActive('wireH5', outA2);
    setActive('wireH5_2', outA2);
    setActive('wireOutD5', outA2);
    setActive('wireOutD5_2', outA2);
    setActive('wireOutB5', outA2);
    setActive('wireOutB5_2', outA2);
    setActive('wireOutI5', outA2);

    setActive('wireP5', outB2);
    setActive('wireP5_2', outB2);
    setActive('wireOutH5', outB2);
    setActive('wireOutH5_2', outB2);
    setActive('wireOutE5', outB2);
    setActive('wireOutE5_2', outB2);
    setActive('wireOutI5_2', outB2);

    setActive('wireOutI5_3', out);
    setActive('wireOutJ5', out);
    setActive('wireOutJ5_2', out);
    setActive('wireOutJ5_3', out);

    lamp5.classList.toggle('on', out);
}

switchA5.addEventListener('click', () => {

    switchA5.classList.toggle('on');
    updateCircuit5();
});

switchB5.addEventListener('click', () => {

    switchB5.classList.toggle('on');
    updateCircuit5();
});

// Circuit 6: ADDER

const switchA6 = document.getElementById('switchA6');
const switchB6 = document.getElementById('switchB6');
const lampA6 = document.getElementById('lampA6');
const lampB6 = document.getElementById('lampB6');

function updateCircuit6() {

    const a = switchA6.classList.contains('on');
    const b = switchB6.classList.contains('on');

    setActive('NumA6', a);
    setActive('NumB6', b);
    setContent('NumA6', Number(a));
    setContent('NumB6', Number(b));

    const out1 = a && b;
    const out2= a ^ b;

    setActive('NumInA6', a);
    setActive('NumInB6', b);
    setContent('NumInA6', Number(a));
    setContent('NumInB6', Number(b));

    setActive('wireA6', a);
    setActive('wireA6_2', a);
    setActive('wireA6_3', a);

    setActive('wireB6', b);
    setActive('wireB6_2', b);
    setActive('wireB6_3', b);

    setActive('wireOutA6', out1);
    setActive('wireOutA6_2', out1);
    setActive('NumOutA6', out1);
    setContent('NumOutA6', Number(out1));

    setActive('wireOutB6', out2);
    setActive('wireOutB6_2', out2);
    setActive('NumOutB6', out2);
    setContent('NumOutB6', Number(out2));

    lampA6.classList.toggle('on', out1);
    lampB6.classList.toggle('on', out2);
}

switchA6.addEventListener('click', () => {

    switchA6.classList.toggle('on');
    updateCircuit6();
});

switchB6.addEventListener('click', () => {

    switchB6.classList.toggle('on');
    updateCircuit6();
});


// Circuit 7: FULL-ADDER

const switches7 = document.querySelectorAll('.clc[id*="7"]');

function fadd(number, carry) {

    const suffix = number === 1 ? '' : `_${number}`;

    const switchA7 = document.getElementById('switchA7' + suffix);
    const switchB7 = document.getElementById('switchB7' + suffix);

    const a = switchA7.classList.contains('on');
    const b = switchB7.classList.contains('on');

    const c = carry;

    const out = a ^ b ^ c;
    const cout = (a && b) || (a && c) || (b && c);

    setActive('wireIn' + number + 'A7', a);
    setActive('wireIn' + number + 'A7_2', a);
    setActive('NumA7' + suffix, a);
    setContent('NumA7' + suffix, Number(a));

    setActive('wireIn' + number + 'B7', b)
    setActive('NumB7' + suffix, b);
    setContent('NumB7' + suffix, Number(b));

    const res77 = document.getElementById('resultA7' + suffix);

    res77.classList.toggle('on', out);

    setActive('wireOutA7' + suffix, out);
    setActive('NumOut7' + suffix, out);
    setContent('NumOut7' + suffix, Number(out));

    setActive('carryOut' + number + 'A7', cout);
    setActive('carryOut' + number + 'B7', cout);
    setActive('carryOut' + number + 'C7', cout);
    setActive('carryOut' + number + 'D7', cout);
    setActive('wireCarryIn' + number + 'A7', cout);
    setActive('NumC7' + suffix, cout);
    setContent('NumC7' + suffix, Number(cout));

    return cout;
}

function formatNum(number) {

    if (number < 10) {

        return '0' + number;
    }

    return '' + number;
}

function formatRes(number) {

    if (number < 10) {

        return '00' + number;
    }

    if (number < 100) {

        return '0' + number;
    }

    return '' + number;
}

function updateCircuit7() {

    let carry = 0;
    for (let i = 1; i <= 6; i++) {

        carry = fadd(i, carry);
    }

    const r77 = document.getElementById('resultA7_7');


    r77.classList.toggle('on', carry);

    setActive('NumOut7_7', carry);
    setContent('NumOut7_7', Number(carry));

    let num1 = 0;
    let num2 = 0;

    let result = 0;

    let suffix = '';

    for (let i = 1; i <= 6; i++) {

        let switchA7 = document.getElementById('switchA7'+ suffix);
        let switchB7 = document.getElementById('switchB7'+ suffix);
        let result7 = document.getElementById('resultA7'+ suffix);

        let sA7 = switchA7.classList.contains('on');
        let sB7 = switchB7.classList.contains('on');
        let r7 = result7.classList.contains('on');

        num1 = num1 + Number(sA7) * (2 ** (i - 1));

        num2 = num2 + Number(sB7) * (2 ** (i - 1));

        result = result + Number(r7) * (2 ** (i - 1));

        suffix = `_${i + 1}`;
    }

    const result77 = document.getElementById('resultA7_7');
    const r = result77.classList.contains('on');
    result = result + Number(r) * (2 ** 6);

    setContent('NumDecA7', formatNum(num1));
    setContent('NumDecB7', formatNum(num2));
    setContent('NumDecOut7', formatRes(result));
}

switches7.forEach(sw => {

    sw.addEventListener('click', () => {

        sw.classList.toggle('on');
        updateCircuit7();
    });
});


// Circuit 8: Binary Decoder

const switchP8 = document.getElementById('switchP8');
const switchQ8 = document.getElementById('switchQ8');

const lampA8 = document.getElementById('lampA8');
const lampB8 = document.getElementById('lampB8');
const lampC8 = document.getElementById('lampC8');
const lampD8 = document.getElementById('lampD8');

function updateCircuit8() {

    const p = switchP8.classList.contains('on');
    const q = switchQ8.classList.contains('on');

    const notP = !p;
    const notQ = !q;

    const out1 = notP && notQ;
    const out2 = notP && q;
    const out3 = p && notQ;
    const out4 = p && q;

    setActive('wireP8', p);
    setActive('wireP8_2', p);
    setActive('wireInP8', p);
    setActive('wireInP8_2', p);
    setActive('wireInP8_3', p);

    setActive('wireQ8', q);
    setActive('wireQ8_2', q);
    setActive('wireInQ8', q);
    setActive('wireInQ8_2', q);
    setActive('wireInQ8_3', q);

    setActive('wireInN1P8', notP);
    setActive('wireInN2P8', notP);
    setActive('wireInN2P8_2', notP);

    setActive('wireInN1Q8', notQ);
    setActive('wireInN2Q8', notQ);
    setActive('wireInN2Q8_2', notQ);

    setActive('wireOutA8', out1);
    setActive('wireOutB8', out2);
    setActive('wireOutC8', out3);
    setActive('wireOutD8', out4);

    setContent('NumA8', Number(p));
    setContent('NumB8', Number(q));

    lampA8.classList.toggle('on', out1);
    lampB8.classList.toggle('on', out2);
    lampC8.classList.toggle('on', out3);
    lampD8.classList.toggle('on', out4);
}

switchP8.addEventListener('click', () => {

    switchP8.classList.toggle('on');
    updateCircuit8();
});

switchQ8.addEventListener('click', () => {

    switchQ8.classList.toggle('on');
    updateCircuit8();
});

// Circuit 9: SET-RESET circuit

const switchA9 = document.getElementById('switchA9');
const switchB9 = document.getElementById('switchB9');

function updateCircuit9() {

    const a = switchA9.classList.contains('on');
    const b = switchB9.classList.contains('on');

    if (a && b) {

        setError('wireOutX9', true);
        setError('wireOutX9_2', true);
        setError('wireOutX9_3', true);
        setError('wireOutX9_4', true);
        setError('wireInNOut9', true);
        setError('Out9', true);
        setContent('Out9', 0);
        return;
    }
    else {

        setError('wireOutX9', false);
        setError('wireOutX9_2', false);
        setError('wireOutX9_3', false);
        setError('wireOutX9_4', false);
        setError('wireInNOut9', false);
        setError('Out9', false);
    }

    const c = getActive('wireInNOut9');

    const out1 = a || c;
    const out2 = !b;
    const out = out1 && out2;

    setActive('wireA9', a);
    setActive('wireB9', b);

    setActive('wireOutA9', out1);
    setActive('wireOutB9', out2);

    setActive('wireOutX9', out);
    setActive('wireOutX9_2', out);
    setActive('wireOutX9_3', out);
    setActive('wireOutX9_4', out);
    setActive('wireInNOut9', out);
    
    setActive('Out9', out);
    setContent('Out9', Number(out));
}

switchA9.addEventListener('click', () => {

    switchA9.classList.toggle('on');
    updateCircuit9();
    updateCircuit9();
});

switchB9.addEventListener('click', () => {

    switchB9.classList.toggle('on');
    updateCircuit9();
    updateCircuit9();
});

// Circuit 10: WRITE-ENABLE circuit

const switchA10 = document.getElementById('switchA10');
const switchB10 = document.getElementById('switchB10');
const lamp10 = document.getElementById('lamp10');

function updateCircuit10() {

    const a = switchA10.classList.contains('on');
    const b = switchB10.classList.contains('on');
    const c = getActive('wireInNOut10');

    const notA = !a;

    const out1 = a && b;
    const out2 = notA && b;

    const out3 = out1 || c;
    const out4 = !out2;
    const out = out3 && out4;

    setActive('wireA10', a);
    setActive('wireConnA10', a);
    setActive('wireConnA10_2', a);

    setActive('wireB10', b);
    setActive('wireConnB10', b);
    setActive('wireConnB10_2', b);

    setActive('wireOutNA10', notA);

    setActive('wireOutA10', out1);
    setActive('wireOutB10', out2);

    setActive('wireOutC10', out3);
    setActive('wireOutD10', out4);

    setActive('wireOutX10', out);
    setActive('wireOutX10_2', out);
    setActive('wireOutX10_3', out);
    setActive('wireOutX10_4', out);

    setActive('wireInNOut10', out);
    
    setActive('Out10', out);
    setContent('Out10', Number(out));

    setActive('wireOut10', out);
    lamp10.classList.toggle('on', out);
}

switchA10.addEventListener('click', () => {

    switchA10.classList.toggle('on');
    updateCircuit10();
    updateCircuit10();
});

switchB10.addEventListener('click', () => {

    switchB10.classList.toggle('on');
    updateCircuit10();
    updateCircuit10();
});

// Circuit 11 : Memory circuit

const switches11 = document.querySelectorAll('.clc[id*="11"]');
const data11 = document.querySelectorAll('[id*="Data11_"]');

const switchRD11 = document.getElementById('switchRD11');
const switchWT11 = document.getElementById('switchWT11');
const switchDT11 = document.getElementById('switchDT11');

const switchA11 = document.getElementById('switchA11');
const switchB11 = document.getElementById('switchB11');
const switchC11 = document.getElementById('switchC11');
const switchD11 = document.getElementById('switchD11');

const lamp11 = document.getElementById('lamp11');

function updateCircuit11() {

    const read = switchRD11.classList.contains('on');
    const write = switchWT11.classList.contains('on');
    const data = switchDT11.classList.contains('on');

    const a = switchA11.classList.contains('on');
    const b = switchB11.classList.contains('on');
    const c = switchC11.classList.contains('on');
    const d = switchD11.classList.contains('on');

    if (write && read) {

        lamp11.classList.add('err');
        setError('wireOut11', true);
        return;
    }
    else {

        lamp11.classList.remove('err');
        setError('wireOut11', false);
    }

    const f11 = 'Data11_' + Number(a) + Number(b) + Number(c) + Number(d);
    const fd11 = 'Num' + f11;

    data11.forEach(data => {

        const cond = data.id === f11;
        setSelect(data.id, cond);
    })

    const field11 = document.getElementById(f11); 
    const fieldData11 = document.getElementById(fd11);

    const f = field11.classList.contains('on');

    if (write) {

        field11.classList.toggle('on', data);
        
        setActive(fd11, data);
        setContent(fd11, Number(data));
    }

    if (read) {

        setActive('wireOut11', f);
        lamp11.classList.toggle('on', f)
    }

    setActive("wireA11", a);
    setActive("wireA11_2", a);

    setActive("wireB11", b);
    setActive("wireB11_2", b);

    setActive("wireC11", c);
    setActive("wireC11_2", c);

    setActive("wireD11", d);
    setActive("wireD11_2", d);

    setActive("wireRD11", read);
    setActive("wireWT11", write);
    setActive("wireDT11", data);

    setActive("NumRD11", read);
    setContent("NumRD11", Number(read));

    setActive("NumWT11", write);
    setContent("NumWT11", Number(write));

    setActive("NumDT11", data);
    setContent("NumDT11", Number(data));

    setActive("NumAddrA11", a);
    setActive("NumAddrB11", b);
    setActive("NumAddrC11", c);
    setActive("NumAddrD11", d);

    setContent("NumAddrA11", Number(a));
    setContent("NumAddrB11", Number(b));
    setContent("NumAddrC11", Number(c));
    setContent("NumAddrD11", Number(d));

}

switches11.forEach(sw => {

    sw.addEventListener('click', () => {

        sw.classList.toggle('on');
        updateCircuit11();
    });
});