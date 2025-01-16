// รายละเอียดปืน
const gunData = {
  m4a1: {
    name: "M4A1",
    description: "ปืนไรเฟิลจู่โจมยอดนิยม เหมาะสำหรับการต่อสู้ในระยะกลางถึงไกล",
    model: "model/gun/m4a1.glb",
  },
  "scar-h": {
    name: "Scar-H",
    description: "ปืนไรเฟิลทรงพลังที่มีความแม่นยำสูง ใช้งานได้หลากหลายสถานการณ์",
    model: "model/gun/scar-h.glb",
  },
  glock: {
    name: "Glock",
    description: "ปืนพกขนาดเล็ก ใช้งานง่ายและคล่องตัวสูง",
    model: "model/gun/Glock.glb",
  },
  revolver: {
    name: "Revolver",
    description: "ปืนพกทรงคลาสสิกที่ทรงพลัง เหมาะสำหรับผู้ที่ชอบความดั้งเดิม",
    model: "model/gun/Revolver.glb",
  },
  awp: {
    name: "AWP",
    description: "ปืนซุ่มยิงที่มีความแม่นยำและพลังทำลายล้างสูง",
    model: "model/gun/AWP.glb",
  },
  ump45: {
    name: "UMP45",
    description: "ปืนกลมือที่น้ำหนักเบาและใช้งานง่าย เหมาะสำหรับระยะประชิด",
    model: "model/gun/ump45.glb",
  },
};

// โซนแสดงโมเดลปืน
const scene = document.querySelector("a-scene");
const gunMenu = document.getElementById("gun-menu");
const gunInfo = document.getElementById("gun-info");
const gunName = document.getElementById("gun-name");
const gunDescription = document.getElementById("gun-description");
const closeInfoButton = document.getElementById("close-info");

// เพิ่มปืนใหม่ในฉาก
function displayGun(gunKey) {
  const gun = gunData[gunKey];

  // ลบปืนที่แสดงก่อนหน้า
  const existingGun = scene.querySelector(".gun-display");
  if (existingGun) scene.removeChild(existingGun);

  try {
    // สร้างโมเดลปืนใหม่
    const gunEntity = document.createElement("a-entity");
    gunEntity.setAttribute("gltf-model", gun.model);
    gunEntity.setAttribute("position", "0 1.5 -4");
    gunEntity.setAttribute("scale", "1.5 1.5 1.5");
    gunEntity.classList.add("gun-display");
    scene.appendChild(gunEntity);

    // แสดงข้อมูลปืน
    gunName.textContent = gun.name;
    gunDescription.textContent = gun.description;
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


