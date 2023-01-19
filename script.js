const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const data = {
    run: ["01-01", "01-02", "01-06"],
    water: ["01-04"],
    food: ["01-05"],
    libre : ["01-07"],
    cheers: ["01-08"]

};
nlwSetup.setData(data)
nlwSetup.load()