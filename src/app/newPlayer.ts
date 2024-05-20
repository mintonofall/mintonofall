
    "use server";
  export async function newPlayer(formData: FormData) {
    console.log(
      formData.get("name"),
      formData.get("age"),
      formData.get("grade")
    );
  }