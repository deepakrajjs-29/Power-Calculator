const validCredentials = [
    { username: 'admin', password: 'admin123' },
];

const fanBrands = {
    'crompton': { name: 'Crompton Ceiling Fan', watts: 75 },
    'usha': { name: 'Usha Table Fan', watts: 60 },
    'havells': { name: 'Havells Exhaust Fan', watts: 70 },
    'orient': { name: 'Orient Wall Fan', watts: 65 },
    'bajaj': { name: 'Bajaj Pedestal Fan', watts: 90 }
};

let isLoggedIn = false;
let roomData = [];
let selectedState = "";
let totalRooms = 0;

function checkLoginStatus() {
    if (!isLoggedIn) {
        showLoginPage();
    } else {
        showCalculatorApp();
    }
}

function showLoginPage() {
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('calculatorApp').classList.add('hidden');
}

function showCalculatorApp() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('calculatorApp').classList.remove('hidden');
}

function showMessage(message, isError = true) {
    const errorDiv = document.getElementById('errorMessage');
    const successDiv = document.getElementById('successMessage');
    
    if (isError) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        successDiv.style.display = 'none';
        setTimeout(() => {
            errorDiv.style.display = 'none';
        }, 3000);
    } else {
        successDiv.textContent = message;
        successDiv.style.display = 'block';
        errorDiv.style.display = 'none';
        setTimeout(() => {
            successDiv.style.display = 'none';
        }, 2000);
    }
}

function validateLogin(username, password) {
    return validCredentials.some(cred => 
        cred.username === username && cred.password === password
    );
}

function login(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        showMessage('Please enter both username and password');
        return;
    }
    
    if (validateLogin(username, password)) {
        showMessage('Login successful! Redirecting...', false);
        isLoggedIn = true;
        
        setTimeout(() => {
            showCalculatorApp();
        }, 1000);
    } else {
        showMessage('Invalid username or password');
        document.getElementById('password').value = '';
    }
}

function logout() {
    isLoggedIn = false;
    resetCalculator();
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    showLoginPage();
}

function goToStep1() {
    document.getElementById('step1').classList.add('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.remove('active');
}

function goToStep2() {
    const state = document.getElementById('state').value;
    const rooms = parseInt(document.getElementById('totalRooms').value);
    
    if (!rooms || rooms < 1) {
        alert('Please enter a valid number of rooms');
        return;
    }
    
    selectedState = state;
    totalRooms = rooms;
    
    generateRoomForms();
    
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    document.getElementById('step3').classList.remove('active');
}

function goToStep3() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
}

function updateKitchenFanWattage() {
    const fanBrand = document.getElementById('kitchenFanBrand');
}

function updateRoomFanWattage(roomNum) {
    const fanBrand = document.getElementById(`fanBrand${roomNum}`);
}

function generateRoomForms() {
    const container = document.getElementById('roomsContainer');
    container.innerHTML = '';
    
    for (let i = 1; i <= totalRooms; i++) {
        const roomSection = document.createElement('div');
        roomSection.className = 'room-section';
        roomSection.innerHTML = `
            <h3>Room ${i}</h3>
            <div class="form-group">
                <label>Room Name:</label>
                <input type="text" id="roomName${i}" placeholder="e.g., Living Room, Bedroom" required>
            </div>
            <div class="appliance-grid">
                <div class="appliance-item">
                    <label>Fan Brand:</label>
                    <select id="fanBrand${i}" onchange="updateRoomFanWattage(${i})">
                        <option value="0">None</option>
                        <option value="75">Crompton Ceiling Fan (75W)</option>
                        <option value="60">Usha Table Fan (60W)</option>
                        <option value="70">Havells Exhaust Fan (70W)</option>
                        <option value="65">Orient Wall Fan (65W)</option>
                        <option value="90">Bajaj Pedestal Fan (90W)</option>
                    </select>
                    <small>Daily Hours: <input type="number" id="fanHours${i}" min="0" max="24" value="8" style="width:60px; padding:5px;"></small>
                </div>
                <div class="appliance-item">
                    <label>Tubelight (W):</label>
                    <input type="number" id="tubelight${i}" min="0" value="0">
                    <small>Daily Hours: <input type="number" id="tubelightHours${i}" min="0" max="24" value="5" style="width:60px; padding:5px;"></small>
                </div>
                <div class="appliance-item">
                    <label>Night Light (W):</label>
                    <input type="number" id="nightlight${i}" min="0" value="0">
                    <small>Daily Hours: <input type="number" id="nightlightHours${i}" min="0" max="24" value="8" style="width:60px; padding:5px;"></small>
                </div>
                <div class="appliance-item">
                    <label>Color Light (W):</label>
                    <input type="number" id="colorlight${i}" min="0" value="0">
                    <small>Daily Hours: <input type="number" id="colorlightHours${i}" min="0" max="24" value="3" style="width:60px; padding:5px;"></small>
                </div>
            </div>
        `;
        container.appendChild(roomSection);
    }
}

function calculateBill() {
    for (let i = 1; i <= totalRooms; i++) {
        const roomName = document.getElementById(`roomName${i}`).value.trim();
        if (!roomName) {
            alert(`Please enter a name for Room ${i}`);
            return;
        }
    }

    let totalConsumption = 0;
    let roomDetails = [];
    let maxRoomConsumption = 0;
    let maxRoomName = "";

    for (let i = 1; i <= totalRooms; i++) {
        const roomName = document.getElementById(`roomName${i}`).value;
        const fanWatts = parseFloat(document.getElementById(`fanBrand${i}`).value) || 0;
        const fanHours = parseFloat(document.getElementById(`fanHours${i}`).value) || 0;
        const tubelight = parseFloat(document.getElementById(`tubelight${i}`).value) || 0;
        const tubelightHours = parseFloat(document.getElementById(`tubelightHours${i}`).value) || 0;
        const nightlight = parseFloat(document.getElementById(`nightlight${i}`).value) || 0;
        const nightlightHours = parseFloat(document.getElementById(`nightlightHours${i}`).value) || 0;
        const colorlight = parseFloat(document.getElementById(`colorlight${i}`).value) || 0;
        const colorlightHours = parseFloat(document.getElementById(`colorlightHours${i}`).value) || 0;
        
        const fanConsumption = (fanWatts * fanHours * 30) / 1000;
        const tubelightConsumption = (tubelight * tubelightHours * 30) / 1000;
        const nightlightConsumption = (nightlight * nightlightHours * 30) / 1000;
        const colorlightConsumption = (colorlight * colorlightHours * 30) / 1000;
        
        const roomTotal = fanConsumption + tubelightConsumption + nightlightConsumption + colorlightConsumption;
        totalConsumption += roomTotal;

        if (roomTotal > maxRoomConsumption) {
            maxRoomConsumption = roomTotal;
            maxRoomName = roomName;
        }

        const fanBrandSelect = document.getElementById(`fanBrand${i}`);
        const fanBrandName = fanBrandSelect.options[fanBrandSelect.selectedIndex].text;

        roomDetails.push({
            name: roomName,
            fan: fanWatts,
            fanHours: fanHours,
            fanBrand: fanWatts > 0 ? fanBrandName : 'None',
            fanConsumption: fanConsumption,
            tubelight: tubelight,
            tubelightHours: tubelightHours,
            tubelightConsumption: tubelightConsumption,
            nightlight: nightlight,
            nightlightHours: nightlightHours,
            nightlightConsumption: nightlightConsumption,
            colorlight: colorlight,
            colorlightHours: colorlightHours,
            colorlightConsumption: colorlightConsumption,
            total: roomTotal
        });
    }

    const kitchenFanWatts = parseFloat(document.getElementById('kitchenFanBrand').value) || 0;
    const kitchenFanHours = parseFloat(document.getElementById('kitchenFanHours').value) || 0;
    const kitchenLight = parseFloat(document.getElementById('kitchenLight').value) || 0;
    const kitchenLightHours = parseFloat(document.getElementById('kitchenLightHours').value) || 0;
    const kitchenMixee = parseFloat(document.getElementById('kitchenMixee').value) || 0;
    const kitchenMixeeHours = parseFloat(document.getElementById('kitchenMixeeHours').value) || 0;
    const kitchenGrinder = parseFloat(document.getElementById('kitchenGrinder').value) || 0;
    const kitchenGrinderHours = parseFloat(document.getElementById('kitchenGrinderHours').value) || 0;
    const kitchenFridge = parseFloat(document.getElementById('kitchenFridge').value) || 0;
    const kitchenFridgeHours = parseFloat(document.getElementById('kitchenFridgeHours').value) || 0;
    const kitchenChimney = parseFloat(document.getElementById('kitchenChimney').value) || 0;
    const kitchenChimneyHours = parseFloat(document.getElementById('kitchenChimneyHours').value) || 0;
    const kitchenOven = parseFloat(document.getElementById('kitchenOven').value) || 0;
    const kitchenOvenHours = parseFloat(document.getElementById('kitchenOvenHours').value) || 0;
    const kitchenDishwasher = parseFloat(document.getElementById('kitchenDishwasher').value) || 0;
    const kitchenDishwasherHours = parseFloat(document.getElementById('kitchenDishwasherHours').value) || 0;

    const kitchenFanConsumption = (kitchenFanWatts * kitchenFanHours * 30) / 1000;
    const kitchenLightConsumption = (kitchenLight * kitchenLightHours * 30) / 1000;
    const kitchenMixeeConsumption = (kitchenMixee * kitchenMixeeHours * 30) / 1000;
    const kitchenGrinderConsumption = (kitchenGrinder * kitchenGrinderHours * 30) / 1000;
    const kitchenFridgeConsumption = (kitchenFridge * kitchenFridgeHours * 30) / 1000;
    const kitchenChimneyConsumption = (kitchenChimney * kitchenChimneyHours * 30) / 1000;
    const kitchenOvenConsumption = (kitchenOven * kitchenOvenHours * 30) / 1000;
    const kitchenDishwasherConsumption = (kitchenDishwasher * kitchenDishwasherHours * 30) / 1000;

    const kitchenTotal = kitchenFanConsumption + kitchenLightConsumption + kitchenMixeeConsumption + 
                        kitchenGrinderConsumption + kitchenFridgeConsumption + kitchenChimneyConsumption + 
                        kitchenOvenConsumption + kitchenDishwasherConsumption;

    totalConsumption += kitchenTotal;

    if (kitchenTotal > maxRoomConsumption) {
        maxRoomConsumption = kitchenTotal;
        maxRoomName = "Kitchen";
    }

    const kitchenFanBrandSelect = document.getElementById('kitchenFanBrand');
    const kitchenFanBrandName = kitchenFanBrandSelect.options[kitchenFanBrandSelect.selectedIndex].text;

    const kitchenData = {
        fanBrand: kitchenFanWatts > 0 ? kitchenFanBrandName : 'None',
        fanConsumption: kitchenFanConsumption,
        lightConsumption: kitchenLightConsumption,
        mixeeConsumption: kitchenMixeeConsumption,
        grinderConsumption: kitchenGrinderConsumption,
        fridgeConsumption: kitchenFridgeConsumption,
        chimneyConsumption: kitchenChimneyConsumption,
        ovenConsumption: kitchenOvenConsumption,
        dishwasherConsumption: kitchenDishwasherConsumption,
        total: kitchenTotal
    };

    const totalBill = totalConsumption * 7.5;

    displayResults(roomDetails, kitchenData, totalConsumption, totalBill, maxRoomName, maxRoomConsumption);
    goToStep3();
}

function displayResults(roomDetails, kitchenData, totalConsumption, totalBill, maxRoomName, maxRoomConsumption) {
    const resultsContainer = document.getElementById('resultsContent');
    
    let tableHTML = `
        <div class="summary-card">
            <h2>Bill Summary for ${selectedState}</h2>
            <div class="summary-item"><strong>Billing Period:</strong> 30 Days</div>
            <div class="summary-item"><strong>Total Consumption:</strong> ${totalConsumption.toFixed(2)} kWh (Units)</div>
            <div class="summary-item"><strong>Rate:</strong> ₹7.5 per unit</div>
            <div class="summary-item"><strong>Total Bill:</strong> ₹${totalBill.toFixed(2)}</div>
        </div>

        <table>
            <tr>
                <th>Room</th>
                <th>Fan Brand</th>
                <th>Fan (kWh)</th>
                <th>Tubelight (kWh)</th>
                <th>Night Light (kWh)</th>
                <th>Color Light (kWh)</th>
                <th>Total (kWh)</th>
            </tr>
    `;

    roomDetails.forEach(room => {
        tableHTML += `
            <tr>
                <td><strong>${room.name}</strong></td>
                <td>${room.fanBrand}</td>
                <td>${room.fanConsumption.toFixed(2)}</td>
                <td>${room.tubelightConsumption.toFixed(2)}</td>
                <td>${room.nightlightConsumption.toFixed(2)}</td>
                <td>${room.colorlightConsumption.toFixed(2)}</td>
                <td><strong>${room.total.toFixed(2)}</strong></td>
            </tr>
        `;
    });

    tableHTML += `</table>`;

    tableHTML += `
        <h3 style="margin-top: 30px; color: #2c3e50;">Kitchen Appliances Breakdown</h3>
        <table>
            <tr>
                <th>Appliance</th>
                <th>Brand/Type</th>
                <th>Consumption (kWh)</th>
            </tr>
            <tr>
                <td>Fan</td>
                <td>${kitchenData.fanBrand}</td>
                <td>${kitchenData.fanConsumption.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Light</td>
                <td>-</td>
                <td>${kitchenData.lightConsumption.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Mixee</td>
                <td>-</td>
                <td>${kitchenData.mixeeConsumption.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Grinder</td>
                <td>-</td>
                <td>${kitchenData.grinderConsumption.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Fridge</td>
                <td>-</td>
                <td>${kitchenData.fridgeConsumption.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Chimney</td>
                <td>-</td>
                <td>${kitchenData.chimneyConsumption.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Oven</td>
                <td>-</td>
                <td>${kitchenData.ovenConsumption.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Dishwasher</td>
                <td>-</td>
                <td>${kitchenData.dishwasherConsumption.toFixed(2)}</td>
            </tr>
            <tr style="background: #e8f5e8; font-weight: bold;">
                <td colspan="2"><strong>Kitchen Total</strong></td>
                <td><strong>${kitchenData.total.toFixed(2)}</strong></td>
            </tr>
        </table>

        <div class="highlight">
            30-Day Total Bill: ₹${totalBill.toFixed(2)}
        </div>

        <div style="background: #fff3cd; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin-bottom: 10px;">Consumption Analysis</h3>
            <p><strong>Highest Consuming Area:</strong> ${maxRoomName} (${maxRoomConsumption.toFixed(2)} kWh)</p>
            <p><strong>Average per Room:</strong> ${(totalConsumption / (totalRooms + 1)).toFixed(2)} kWh</p>
            <p><strong>Daily Average Consumption:</strong> ${(totalConsumption / 30).toFixed(2)} kWh</p>
            <p><strong>Daily Average Cost:</strong> ₹${(totalBill / 30).toFixed(2)}</p>
        </div>
    `;

    resultsContainer.innerHTML = tableHTML;
}

function resetCalculator() {
    document.getElementById('state').value = 'Tamil Nadu';
    document.getElementById('totalRooms').value = '';
    document.getElementById('roomsContainer').innerHTML = '';
    
    document.getElementById('kitchenFanBrand').value = '0';
    document.getElementById('kitchenFanHours').value = '8';
    document.getElementById('kitchenLight').value = '0';
    document.getElementById('kitchenLightHours').value = '5';
    document.getElementById('kitchenMixee').value = '0';
    document.getElementById('kitchenMixeeHours').value = '0.5';
    document.getElementById('kitchenGrinder').value = '0';
    document.getElementById('kitchenGrinderHours').value = '0.5';
    document.getElementById('kitchenFridge').value = '0';
    document.getElementById('kitchenFridgeHours').value = '24';
    document.getElementById('kitchenChimney').value = '0';
    document.getElementById('kitchenChimneyHours').value = '1';
    document.getElementById('kitchenOven').value = '0';
    document.getElementById('kitchenOvenHours').value = '0.5';
    document.getElementById('kitchenDishwasher').value = '0';
    document.getElementById('kitchenDishwasherHours').value = '1';
    
    roomData = [];
    selectedState = "";
    totalRooms = 0;
    
    goToStep1();
}

document.getElementById('loginForm').addEventListener('submit', login);

document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});
