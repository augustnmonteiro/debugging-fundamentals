function g(II) {
    let l = [];
    for (let i = 0; i < II.length; i++) {
      let t = II[i];
      if (t.z >= t.x && t.b) { l = l.concat(t); }
    }
    return l;
  }
  
  let xyz = [
    { x: 17, n: "f20f9edb-fea2-484b-a928-45e95de860b6", z: 82, b: true },
    { x: 4, n: "09c505fc-baf8-4bda-9c9f-ae578904d00c", z: 1, b: false },
    { x: 43, n: "b3723c88-4896-4b09-a43b-8eb046efc98c", z: 32, b: true },
    { x: 21, n: "8fdc8792-f07f-4bb8-a12a-6daf207222e0", z: 21, b: false },
    { x: 75, n: "ad62ea2f-c8fa-45e3-ab45-13009d0f257b", z: 54, b: true },
    { x: 37, n: "d0dcc205-3c5e-44d2-8b55-60f34e820366", z: 22, b: true },
    { x: 49, n: "cb7b368c-4a1b-4e12-9f5c-93d0dd843eea", z: 17, b: true }
  ];
  
  console.log(g(xyz));
  