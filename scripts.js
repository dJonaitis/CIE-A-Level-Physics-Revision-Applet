console.log("Script loaded")

class Flashcard {
    constructor(question, answer) {
      this.question = question;
      this.answer = answer;
    }
}


let definitions = [new Flashcard("Radian", "The angle subtended at the centre of a circle by an arc of length equal to the radius of the circle."), new Flashcard("Tangential speed", "The speed of an object at the tangent of a circle"), new Flashcard("Gravitational field strength", "The force per unit mass"), new Flashcard("Gravitational potential", "At a point is the work done per unit mass bringing a small test mass from infinity to the point"), new Flashcard("Gravitational potential energy", "At a point is defined as the work done to move a mass from infinity to that point"), new Flashcard("Thermal equilibrium", "Is reached when the objects are of the same temperature. There will be no net transfer of thermal energy between them when they are in contact with each other."), new Flashcard("Specific heat capacity", "The energy required per unit mass of the substance to raise the temperature by 1K."), new Flashcard("Specific latent heat", "Of a substance is the energy required per unit mass of the substance to change its state without any change in temperature."), new Flashcard("First law of thermodynamics", "The change in internal energy of a system U is equal to the net heat transfer into the system, q, plus the net work done on the system W."), new Flashcard("Internal energy", "Of a system is the sum of the random distribution of kinetic and potential energies of its atoms or molecules"), new Flashcard("Simple harmonic motion", "An object vibrates in simple harmonic motion if its acceleration is directly proportional to its displacement from its equilibrium position and is in the opposite direction to the displacement."), new Flashcard("Test charge", "A test charge is defined as a small positive charge that feels the force of the electric field without distorting it."), new Flashcard("Electric field strength", "The force per unit charge exerted on a stationary positive charge at that point."), new Flashcard("Coulomb's law", "Any two point charges exert an electrical force on each other that is proportional to the product of their charges and inversely proportional to the square of the distance between them."), new Flashcard("Electric potential", "The work done per unit positive charge in bringing a small positive test charge from infinity to that point."), new Flashcard("Capacitance of parallel plates", "The charge stored on one plate per unit of potential difference between the plates."), new Flashcard("Magnetic field", "A region in space within which a force is felt on a current carrying conductor"), new Flashcard("Magnetic flux density", "The force acting per unit current per unit length on a wire placed at right angles to the magnetic field."), new Flashcard("Magnetic flux", "The product of the magnetic flux density and the cross-sectional area perpendicular to the direction of the magnetic flux density."), new Flashcard("Faraday's law", "States that the magnitude of induced emf is equal to the rate of change of flux linkages with the coil."), new Flashcard("Mean power of an alternating current", "Transferred when a sinusoidal alternating current flows in a a circuit containing resistance is half of the maximum power."), new Flashcard("Photon", "A quantum of energy of electromagnetic radiation."), new Flashcard("Threshhold frequency", "The minimum frequency required to release electrons from the surface of a metal."), new Flashcard("One electronvolt (1eV)", "The energy gained by an electron travelling through a potential difference of one volt."), new Flashcard("Mass defect", "Of a nucleus is equal to the difference between the total mass of the individual separate nucleons and the mass of the nucleus when the nucleons are separated to infinity."), new Flashcard("Binding energy", "The minimum energy needed to separate its nucleons to infinity."), new Flashcard("Fission", "The process in which a massive nucleus splits to form two smaller fragments."), new Flashcard("Fusion", "The process by which two very light nuclei join together to form a heavier nucleus."), new Flashcard("Decay constant", "The probability that an individual nucleus will decay per unit time interval."), new Flashcard("Activity of a radioactive sample", "The rate at which nuclei decay or disintegrate."), new Flashcard("Attenuation", "The gradual decrease in the intensity of a beam of X-rays as it passes through matter is called attenuation."), new Flashcard("Half-thickness", "The thickness that will reduce an x-ray beam to half its original intensity."), new Flashcard("Contrast (x-ray imaging)", "The difference in degrees of blackening."), new Flashcard("Luminosity", "The total radiant energy emitted per unit time"), new Flashcard("Standard candle", "An astronomical object of known luminosity."), new Flashcard("Radiant flux intensity", "The radiant power passing normally through a surface per unit area"), new Flashcard("Redshift", "The fact that wavelengths (of spectral lines) are greater than their known values, shows that stars (in distant galaxies) are moving away from Earth."), new Flashcard("Hubble's Law", "The speed of recession of a galaxy (from observer) is directly proportional to the distance of that galaxy from the observer.")]
console.log(definitions)
let formulas = [new Flashcard("Angular frequency", "\\omega = \\frac{2\\pi}{T}"), new Flashcard("Tangential speed", "v =\\omega \\times r"), new Flashcard("Acceleration (motion in a circle)", "a=\\frac{v^2}{r} \\\\ a=r\\omega^2"), new Flashcard("Centripetal force", "F_{centripetal}=m\\omega^2r \\\\F_{centripetal}=\\frac{mv^2}{r}"), new Flashcard("Orbital period", "T=\\frac{4\\pi^2\\times r^3}{GM}"), new Flashcard("Gravitational potential", "\\phi = -\\frac{GM}{r}"), new Flashcard("Gravitational force", "F = \\frac{Gm_1m_2}{r^2}\\\\ \\\\G=6.67\\times10^{-11}Nm^2kg^{-2}"), new Flashcard("Gravitational field strength", "g = \\frac{GM}{r^2}"), new Flashcard("Gravitational potential energy", "E_{potential}=\\frac{-GMm}{r}"), new Flashcard("Specific heat capacity", "E = mc\\Delta\\theta"), new Flashcard("Work done by a gas", "W=p\\Delta V"), new Flashcard("Internal energy", "\\Delta U=q+W"), new Flashcard("Ideal gas law", "pV=nRT \\\\ pV=NkT"), new Flashcard("Pressure of a gas", "p=\\frac13\\frac{Nm}{V}\\langle c^2 \\rangle"), new Flashcard("Specific latent heat", "E=mL"), new Flashcard("Kinetic energy of a gas","K_E=\\frac32kT"), new Flashcard("Acceleration (simple harmonic motion)", "a=-(\\omega^2x)"), new Flashcard("Velocity (simple harmonic motion)", "v=v_0 \\cos(\\omega t) \\\\ v=\\pm \\omega \\sqrt{x_0^2-x^2}"), new Flashcard("Displacement (simple harmonic motion)", "x=x_0\\sin(\\omega t)"), new Flashcard("Ratio of displacement and velocity (s.h.m)", "\\frac{x}{x_0}+\\frac{v}{v_0}=1"), new Flashcard("Electric field strength", "E_{fs}=\\frac{F}{Q} \\\\ E_{fs}=\\frac{Q}{4\\pi\\epsilon_0r^2}"), new Flashcard("Electric field strength of a uniform field", "E_{fs\\ uniform}=\\frac{\\Delta V}{\\Delta d}"), new Flashcard("Coulomb's law", "F=\\frac{Q_1Q_2}{4\\pi \\epsilon_0 r^2}"), new Flashcard("Electric potential (two charges)", "E_p=\\frac{Q_1Q_2}{4\\pi\\epsilon_0r}"), new Flashcard("Electric potential (one charge)", "V=\\frac{Q}{4\\pi\\epsilon_0r}"), new Flashcard("Capacitance (parallel plate)", "C=\\frac QV"), new Flashcard("Capacitance (sphere)", "C=4\\pi \\epsilon_0r"), new Flashcard("Work done (capacitor)", "W=\\frac 12 QV; W=\\frac 12 CV^2; W=\\frac 12 \\frac{Q^2}{C}"), new Flashcard("Time constant", "\\tau=RC"), new Flashcard("Discharge of a capacitor", "I=I_0e^{-\\frac{1}{RC}t} ; Q=Q_0e^{-\\frac{1}{RC}t} ; V=V_0e^{-\\frac{1}{RC}t}"), new Flashcard("Magnetic force (on length of current carrying conductor)", "F=BIL \\times\\sin\\theta"), new Flashcard("Magnetic force (on moving charge)", "F=BQv"), new Flashcard("Hall voltage", "V_H=\\frac{BI}{ntQ}"), new Flashcard("Induced e.m.f.", "e.m.f. =-N\\frac{\\Delta \\phi}{\\Delta t}"), new Flashcard("Magnetic flux", "\\phi = B\\times A \\times \\cos \\theta"), new Flashcard("Magnetic flux linkage", "\\lambda = B \\times A \\times N  \\cos \\theta"), new Flashcard("Current (alternating current)","I=I_0\\times\\sin\\omega t"), new Flashcard("Power (alternating current)", "P=I^2R \\\\ P=I_0^2\\times \\sin^2 \\omega t"), new Flashcard("Mean power", "<P>=\\frac12\\frac{V^2_0}R"), new Flashcard("Mean voltage (alternating current)", "<V_0>=\\sqrt{\\frac{V^2_0}{2}}=V_{rms}=\\frac{V_0}{\\sqrt2}=0.707V_0"), new Flashcard("Mean current (alternating current)", "<I_0>=\\sqrt{\\frac{I^2_0}{2}}=I_{rms}=\\frac{I_0}{\\sqrt2}=0.707I_0"), new Flashcard("De Broglie wavelength", "\\lambda=\\frac hp"), new Flashcard("Particle momentum", "p=\\frac Ec"), new Flashcard("Particle nature of light", "hf=\\phi+\\frac12mv^2_{max}"), new Flashcard("Half-life", "\\lambda=\\frac{\\ln2}{t_{\\frac{1}2}}"), new Flashcard("Radioactive activity", "A=\\lambda N"), new Flashcard("Alpha decay", "{}^A_ZX\\rightarrow{}^4_2He+{}^{A-4}_{Z-2}Y"), new Flashcard("Gamma decay", "{}^A_ZX \\rightarrow{}^0_{0}\\gamma+{}^A_{Z}Y"), new Flashcard("Beta- decay", "{}^A_ZX \\rightarrow{}^0_{+1}\\beta+{}^A_{Z-1}Y"), new Flashcard("Beta+ decay", "{}^A_ZX \\rightarrow{}^0_{-1}a+{}^A_{Z+1}Y"), new Flashcard("Intensity attenuation", "I=I_0e^{-\\mu x}"), new Flashcard("Max frequency (x-rays)", "f_{max}=\\frac{eV}{h}"), new Flashcard("Radiant flux intensity", "F = \\frac{L}{4\\pi d^2}"), new Flashcard("Luminosity", "L=4\\pi\\sigma r^2T^4 \\\\ \\sigma = 5.87\\times10^{-8}Wm^2K^{-4}"), new Flashcard("Hubble's law", "v=H_0d\\\\ H_0=2.4\\times10^{-18}s^{-1}"), new Flashcard("Doppler redshift", "\\frac{\\Delta\\lambda}{\\lambda}\\approx\\frac{\\Delta f}{f}\\approx \\frac{v}{c}")]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let selectedArray = []
let index = 0
let score = 0

let arrayInUse = NaN
function showQuestion(){
    if(arrayInUse == 0){
        katex.render(selectedArray[index].answer, document.getElementById("answerFormula"))
    } else if(arrayInUse == 1) {
        document.getElementById("answerDefinition").innerHTML = selectedArray[index].answer
    }
    document.getElementById("question").innerHTML = selectedArray[index].question
    document.getElementById("feedback-buttons").style.display = "none";
}


function select(arr){
    if(arr == "def"){
        selectedArray = shuffleArray(definitions)
        arrayInUse = 1
    } else{
        selectedArray = shuffleArray(formulas)
        arrayInUse = 0
    }
    document.getElementById("main").classList.add("d-none");
    document.getElementById("revision").classList.remove("d-none");
    showQuestion()
}

function end(){
    document.getElementById("reveal-btn").style.display = "none";
    document.getElementById("answerFormula").style.display = "none";
    document.getElementById("answerDefinition").style.display = "none";
    document.getElementById("feedback-buttons").style.display = "none";
    document.getElementById("question").innerHTML = "All done!"
}

function answer(ans){
    if (index < selectedArray.length){
        index += 1
    } else {
        end()
        return
    }
    if(ans){
        score += 1
    }
    document.getElementById("score").innerHTML = `Score: ${score}/${index}`
    document.getElementById("reveal-btn").style.display = "inline-block";
    document.getElementById("answerFormula").style.display = "none";
    document.getElementById("answerDefinition").style.display = "none";
    showQuestion()
}

function revealAnswer(){
    document.getElementById("answerFormula").style.display = "block";
    document.getElementById("answerDefinition").style.display = "block";
    document.getElementById("feedback-buttons").style.display = "block";
    document.getElementById("reveal-btn").style.display = "none";
}
