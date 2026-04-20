"use server";

export async function submitDiagnostic(formData: FormData) {
  const data = {
    traffic: formData.get("traffic"),
    stack: formData.get("stack"),
    goal: formData.get("goal"),
    email: formData.get("email"),
  };

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("=== NUEVO DIAGNÓSTICO RECIBIDO ===");
  console.log("Volumen de Tráfico:", data.traffic);
  console.log("Stack Actual:", data.stack);
  console.log("Objetivo:", data.goal);
  console.log("Email:", data.email);
  console.log("==================================");

  return { success: true, message: "Datos procesados. Evaluando infraestructura." };
}
