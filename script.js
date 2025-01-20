const gunData = {
  m4a1: {
    name: "M4A1",
    description: "ปืนไรเฟิลจู่โจมยอดนิยม เหมาะสำหรับการต่อสู้ในระยะกลางถึงไกล",
    recommendation: "เหมาะสำหรับการยิงต่อเนื่องและการรบทั่วไป ใช้กระสุนขนาด 5.56×45 มม.",
    model: "model/gun/m4a1.glb",
    position:"-0.4 1.8 -9.7", 
    rotation:"0 0 0", 
    scale:"0.5 0.5 0.5"
  },
  "scar-h": {
    name: "Scar-H",
    description: "ปืนแบทเทิลไรเฟิลทรงพลังที่มีความแม่นยำสูง",
    recommendation: "เหมาะสำหรับการลอบโจมตีและสถานการณ์ที่ต้องการพลังยิงสูง ใช้กระสุนขนาด 7.62x51",
    model: "model/gun/scar-h.glb",
    position:"0.1 2.0 -9.7", 
    rotation:"0 -90 0", 
    scale:"3 3 3"
  },
  glock: {
    name: "Glock",
    description: "ปืนพกขนาดเล็ก ใช้งานง่ายและคล่องตัวสูง",
    recommendation: "เหมาะสำหรับการป้องกันตัวในระยะประชิด",
    model: "model/gun/Glock.glb",
    position:"0.1 2.0 -9.7", 
    rotation:"0 -90 -90", 
    scale:"1.5 1.5 1.5"
  },
  revolver: {
    name: "Revolver",
    description: "ปืนพกทรงคลาสสิกที่ทรงพลัง เหมาะสำหรับผู้ที่ชอบความดั้งเดิม",
    recommendation: "เหมาะสำหรับการโจมตีที่ต้องการความแรงในทุกนัด",
    model: "model/gun/Revolver.glb",
    position:"-0.1 2.0 -9.7", 
    rotation:"0 -90 -90", 
    scale:"1.5 1.5 1.5"
  },
  awp: {
    name: "AWP",
    description: "ปืนซุ่มยิงที่มีความแม่นยำและพลังทำลายล้างสูง",
    recommendation: "เหมาะสำหรับการซุ่มโจมตีในระยะไกล",
    model: "model/gun/AWP.glb",
    position:"-0.7 2.0 -9.7", 
    rotation:"0 0 0", 
    scale:"0.45 0.45 0.45"
  },
  ump45: {
    name: "UMP45",
    description: "ปืนกลมือที่น้ำหนักเบาและใช้งานง่าย เหมาะสำหรับระยะประชิด",
    recommendation: "เหมาะสำหรับการโจมตีอย่างรวดเร็วในพื้นที่แคบ",
    model: "model/gun/ump45.glb",
    position:"0.1 2 -9.7", 
    rotation:"0 -90 0", 
    scale:"3 3 3"
  },
};


// โซนแสดงโมเดลปืน
const scene = document.querySelector("a-scene");
const gunMenu = document.getElementById("gun-menu");
const gunInfo = document.getElementById("gun-info");
const gunName = document.getElementById("gun-name");
const gunDescription = document.getElementById("gun-description");
const gunRecommendation = document.getElementById("gun-recommendation");
const closeInfoButton = document.getElementById("close-info");

function displayGun(gunKey) {
  const gun = gunData[gunKey];

  // ลบปืนที่แสดงก่อนหน้า
  const existingGun = scene.querySelector(".gun-display");
  if (existingGun) scene.removeChild(existingGun);

  try {
    // สร้างโมเดลปืนใหม่
    const gunEntity = document.createElement("a-entity");
    gunEntity.setAttribute("gltf-model", gun.model);
    gunEntity.setAttribute("position", gun.position || "0 1.5 -4"); // ตำแหน่งบน Pegboard
    gunEntity.setAttribute("scale", gun.scale || "1 1 1");          // ขนาดปืน
    gunEntity.setAttribute("rotation", gun.rotation || "0 0 0");   // มุมหมุน
    gunEntity.classList.add("gun-display");
    scene.appendChild(gunEntity);

    // แสดงข้อมูลปืน
    gunName.textContent = gun.name;
    gunDescription.textContent = gun.description;
    gunRecommendation.textContent = gun.recommendation || "ไม่มีคำแนะนำเพิ่มเติม.";
    gunInfo.style.display = "block";
  } catch (error) {
    console.error("เกิดข้อผิดพลาดขณะโหลดโมเดล:", error);
    alert("ไม่สามารถโหลดโมเดลปืนได้ โปรดตรวจสอบโค้ดหรือไฟล์โมเดล.");
  }
}

// กดปุ่มเลือกปืน
gunMenu.addEventListener("click", (event) => {
  const gunKey = event.target.getAttribute("data-gun");
  if (gunKey && gunData[gunKey]) {
    displayGun(gunKey);
  }
});

// ปิดข้อมูลปืน
closeInfoButton.addEventListener("click", () => {
  gunInfo.style.display = "none";
});

