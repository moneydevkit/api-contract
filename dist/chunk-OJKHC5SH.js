// src/lib/utils.ts
function ok(value) {
  return { ok: true, value };
}
function err(error) {
  return { ok: false, error };
}

export {
  ok,
  err
};
