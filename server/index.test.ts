import * as request from "supertest";
import app from "./index";
import * as db from "./products.json";

describe("GET /random-url", () => {
  it("should return 404", done => {
    request(app)
      .get("/reset")
      .expect(404, done);
  });
});

describe("GET /api/products", () => {
  it("should return 200 OK", done => {
    return request(app)
      .get("/api/products")
      .expect(200, done);
  });

  it("should gzip compress the server response", done => {
    return request(app)
      .get("/api/products")
      .expect(200)
      .then(res => {
        expect(res.header["content-encoding"]).toBe("gzip");
        done();
      });
  });

  it("should get all products", done => {
    return request(app)
      .get("/api/products")
      .expect(200)
      .then(res => {
        expect(res.body.length).toBe(1000);
        done();
      });
  });
});

describe("GET /api/products/1", () => {
  test("should respond with json and corresponding resource", () =>
    request(app)
      .get("/api/products/1")
      .expect("Content-Type", /json/)
      .expect(db.products[0])
      .expect(200));
});

describe("GET api/products?_page=", () => {
  // json-server by default returns 10 items per page
  test("should paginate", () =>
    request(app)
      .get("/api/products?_page=2")
      .expect("Content-Type", /json/)
      .expect("x-total-count", db.products.length.toString())
      .expect("Access-Control-Expose-Headers", "X-Total-Count, Link")
      .expect(db.products.slice(10, 20))
      .expect(200));
});

describe("GET /api/products?_page=&_limit=", () => {
  test("should paginate with a custom limit", () => {
    return request(app)
      .get("/api/products?_page=2&_limit=50")
      .set("host", "localhost")
      .expect("Content-Type", /json/)
      .expect("x-total-count", db.products.length.toString())
      .expect("Access-Control-Expose-Headers", "X-Total-Count, Link")
      .expect(db.products.slice(50, 100))
      .expect(200);
  });
});

describe("GET /api/products?_page=&_limit=", () => {
  test("should paginate with a custom limit", () => {
    return request(app)
      .get("/api/products?_page=2&_limit=50")
      .set("host", "localhost")
      .expect("Content-Type", /json/)
      .expect("x-total-count", db.products.length.toString())
      .expect("Access-Control-Expose-Headers", "X-Total-Count, Link")
      .expect(db.products.slice(50, 100))
      .expect(200);
  });
});

describe("GET /api/products?_start=&_limit=", () => {
  test("paginate with a custom start & limit", () => {
    return request(app)
      .get("/api/products?_start=0&_limit=50")
      .set("host", "localhost")
      .expect("Content-Type", /json/)
      .expect("x-total-count", db.products.length.toString())
      .expect("Access-Control-Expose-Headers", "X-Total-Count")
      .expect(db.products.slice(0, 50))
      .expect(200);
  });

  test("return [] for out of range custom start & limit", () => {
    return request(app)
      .get("/api/products?_start=1000&_limit=50")
      .set("host", "localhost")
      .expect("Content-Type", /json/)
      .expect("x-total-count", db.products.length.toString())
      .expect("Access-Control-Expose-Headers", "X-Total-Count")
      .expect([])
      .expect(200);
  });
});
