const gunData = {
  m4a1: {
    name: "M4A1",
    description: "ปืนไรเฟิลจู่โจมยอดนิยม เหมาะสำหรับการต่อสู้ในระยะกลางถึงไกล",
    recommendation: "เหมาะสำหรับการยิงต่อเนื่องและการรบทั่วไป",
    ammo: "5.56×45mm NATO",
    country: "สหรัฐอเมริกา", // ประเทศที่ผลิต
    model: "model/gun/m4a1.glb",
    position: "-0.4 1.8 -9.7",
    rotation: "0 0 0",
    scale: "0.5 0.5 0.5"
  },
  "scar-h": {
    name: "Scar-H",
    description: "ปืนแบทเทิลไรเฟิลทรงพลังที่มีความแม่นยำสูง",
    recommendation: "เหมาะสำหรับการลอบโจมตีและสถานการณ์ที่ต้องการพลังยิงสูง",
    ammo: "7.62×51mm NATO",
    country: "เบลเยียม", // ประเทศที่ผลิต
    model: "model/gun/scar-h.glb",
    position: "0.1 2.0 -9.7",
    rotation: "0 -90 0",
    scale: "3 3 3"
  },
  glock: {
    name: "Glock",
    description: "ปืนพกขนาดเล็ก ใช้งานง่ายและคล่องตัวสูง",
    recommendation: "เหมาะสำหรับการป้องกันตัวในระยะประชิด",
    ammo: "9×19mm Parabellum",
    country: "ออสเตรีย", // ประเทศที่ผลิต
    model: "model/gun/Glock.glb",
    position: "0.1 2.0 -9.7",
    rotation: "0 -90 -90",
    scale: "1.5 1.5 1.5"
  },
  revolver: {
    name: "Revolver",
    description: "ปืนพกทรงคลาสสิกที่ทรงพลัง เหมาะสำหรับผู้ที่ชอบความดั้งเดิม",
    recommendation: "เหมาะสำหรับการโจมตีที่ต้องการความแรงในทุกนัด",
    ammo: ".357 Magnum",
    country: "สหรัฐอเมริกา", // ประเทศที่ผลิต
    model: "model/gun/Revolver.glb",
    position: "-0.1 2.0 -9.7",
    rotation: "0 -90 -90",
    scale: "1.5 1.5 1.5"
  },
  awp: {
    name: "AWP",
    description: "ปืนซุ่มยิงที่มีความแม่นยำและพลังทำลายล้างสูง",
    recommendation: "เหมาะสำหรับการซุ่มโจมตีในระยะไกล",
    ammo: "7.62×51mm NATO",
    country: "สหราชอาณาจักร", // ประเทศที่ผลิต
    model: "model/gun/AWP.glb",
    position: "-0.7 2.0 -9.7",
    rotation: "0 0 0",
    scale: "0.45 0.45 0.45"
  },
  ump45: {
    name: "UMP45",
    description: "ปืนกลมือที่น้ำหนักเบาและใช้งานง่าย เหมาะสำหรับระยะประชิด",
    recommendation: "เหมาะสำหรับการโจมตีอย่างรวดเร็วในพื้นที่แคบ",
    ammo: ".45 ACP",
    country: "เยอรมนี", // ประเทศที่ผลิต
    model: "model/gun/ump45.glb",
    position: "0.1 2 -9.7",
    rotation: "0 -90 0",
    scale: "3 3 3"
  },
  "sig-mpx": {
    name: "Sig MPX",
    description: "ปืนกลมือขนาดกะทัดรัดและคล่องตัว",
    recommendation: "เหมาะสำหรับการต่อสู้ในพื้นที่แคบ",
    ammo: "9×19mm Parabellum",
    country: "สหรัฐอเมริกา", // ประเทศที่ผลิต
    model: "model/gun/Sig_MPX.glb",
    position: "0.1 1.85 -9.7",
    rotation: "0 -90 0",
    scale: "6.2 6.2 6.2"
  },
  "remington-870": {
    name: "Remington 870",
    description: "ปืนลูกซองที่มีความแข็งแกร่งและใช้งานได้หลากหลาย",
    recommendation: "เหมาะสำหรับการล่าสัตว์และการต่อสู้ในระยะประชิด",
    ammo: "12 Gauge",
    country: "สหรัฐอเมริกา", // ประเทศที่ผลิต
    model: "model/gun/Remington_870.glb",
    position: "0.1 2 -9.7",
    rotation: "0 0 0",
    scale: "0.5 0.5 0.5"
  },
  mk14: {
    name: "MK14",
    description: "ปืนไรเฟิลที่มีพลังทำลายล้างสูงและเหมาะสำหรับระยะไกล",
    recommendation: "เหมาะสำหรับการซุ่มยิงและสนับสนุนทีม",
    ammo: "7.62×51mm NATO",
    country: "สหรัฐอเมริกา", // ประเทศที่ผลิต
    model: "model/gun/MK14.glb",
    position: "0.1 1.9 -9.7",
    rotation: "0 -90 0",
    scale: "12 12 12"
  },
  mp5: {
    name: "MP5",
    description: "ปืนกลมือที่มีความคล่องตัวและนิยมใช้ในงานปฏิบัติการพิเศษ",
    recommendation: "เหมาะสำหรับการต่อสู้ระยะประชิด",
    ammo: "9×19mm Parabellum",
    country: "เยอรมนี", // ประเทศที่ผลิต
    model: "model/gun/Mp5.glb",
    position: "0.1 2 -9.7",
    rotation: "0 -90 0",
    scale: "6.2 6.2 6.2"
  },
  "sig-p320": {
    name: "Sig P320",
    description: "ปืนพกที่ใช้งานง่ายและมีความทนทาน",
    recommendation: "เหมาะสำหรับการป้องกันตัว",
    ammo: "9×19mm Parabellum",
    country: "สวิตเซอร์แลนด์", // ประเทศที่ผลิต
    model: "model/gun/Sig_p320.glb",
    position: "0.1 1.92 -9.7",
    rotation: "0 -90 0",
    scale: "6.2 6.2 6.2"
  },
  p226: {
    name: "P226",
    description: "ปืนพกแบบคลาสสิกที่ใช้งานได้อย่างยอดเยี่ยม",
    recommendation: "เหมาะสำหรับผู้ที่ต้องการความแม่นยำ",
    ammo: "9×19mm Parabellum",
    country: "เยอรมนี", // ประเทศที่ผลิต
    model: "model/gun/P226.glb",
    position: "0.1 2 -9.7",
    rotation: "0 -90 0",
    scale: "3.5 3.5 3.5"
  },
  "revolver-short": {
    name: "Revolver Short",
    description: "ปืนลูกโม่ขนาดเล็กที่พกพาสะดวก",
    recommendation: "เหมาะสำหรับการป้องกันตัวในระยะประชิด",
    ammo: ".357 Magnum",
    country: "สหรัฐอเมริกา", // ประเทศที่ผลิต
    model: "model/gun/Revolver_short.glb",
    position: "0.2 1.9 -9.7",
    rotation: "0 -90 0",
    scale: "3 3 3"
  },
  "b&t-apc9k-pro": {
    name: "B&T APC9k Pro",
    description: "ปืนกลมือที่มีขนาดกะทัดรัดและคล่องตัวสูง เหมาะสำหรับการใช้งานในพื้นที่แคบ",
    recommendation: "เหมาะสำหรับหน่วยรบพิเศษและการป้องกันตัว",
    ammo: "9×19mm Parabellum",
    country: "สวิตเซอร์แลนด์", // ประเทศที่ผลิต
    model: "model/gun/B&T_APC9k_Pro.glb",
    position: "-0.2 1.9 -9.7",
    rotation: "0 0 0",
    scale: "0.4 0.4 0.4"
  }
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
    gunEntity.setAttribute("rotation", gun.rotation || "0 0 0");
    gunEntity.classList.add("gun-display");
    scene.appendChild(gunEntity);

    // แสดงข้อมูลปืน
    gunName.textContent = gun.name;
    gunDescription.textContent = gun.description;
    gunRecommendation.textContent = gun.recommendation || "ไม่มีคำแนะนำเพิ่มเติม.";
    document.getElementById("gun-country").textContent = `ประเทศที่ผลิต: ${gun.country || "ไม่มีข้อมูล"}`;
    document.getElementById("gun-ammo").textContent = `ขนาดกระสุน ${gun.ammo || "ไม่มีข้อมูล"}`;
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

