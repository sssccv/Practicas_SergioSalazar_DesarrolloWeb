const d = document;
const $form = d.querySelector("#register-form");
const $nameInput = d.querySelector("#name");
const $nameError = d.querySelector("#name-error");
const $emailInput = d.querySelector("#email");
const $emailError = d.querySelector("#email-error");
const $passwordInput = d.querySelector("#password");
const $passwordError = d.querySelector("#password-error");
const $confirmPasswordInput = d.querySelector("#confirm-password");
const $confirmPasswordError = d.querySelector("#confirm-password-error");
const $successMessage = d.querySelector("#success-message");
const $errorsMessages = d.querySelectorAll(".error");

// Creamos el contenedor del loader y el texto
const $loaderContainer = d.createElement("div");
$loaderContainer.classList.add("loader-container");

const $loader = d.createElement("div");
$loader.classList.add("loader");

const $loadingText = d.createElement("div");
$loadingText.classList.add("loading-text");
$loadingText.textContent = "Cargando...";

// Añadimos loader y texto al contenedor
$loaderContainer.appendChild($loader);
$loaderContainer.appendChild($loadingText);
$form.appendChild($loaderContainer);

function showLoader() {
  $loaderContainer.style.display = "flex";
}

function hideLoader() {
  $loaderContainer.style.display = "none";
}

// Función de Validación del Formulario
function validateForm(e) {
  e.preventDefault();

  // Limpiamos los mensajes de error
  $errorsMessages.forEach((el) => {
    el.textContent = "";
  });

  let isValid = true;

  // Validar campo Nombre (solo letras y espacios)
  let namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if ($nameInput.value.trim() === "") {
    $nameError.textContent = "El nombre es obligatorio";
    isValid = false;
  } else if (!namePattern.test($nameInput.value.trim())) {
    $nameError.textContent = "El nombre solo puede contener letras y espacios";
    isValid = false;
  }

  // Validar campo Correo
  let emailPattern = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  if ($emailInput.value.trim() === "") {
    $emailError.textContent = "El correo es obligatorio";
    isValid = false;
  } else if (!emailPattern.test($emailInput.value.trim())) {
    $emailError.textContent = "El formato del correo es inválido";
    isValid = false;
  }

  // Validar campo Contraseña
  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if ($passwordInput.value.trim() === "") {
    $passwordError.textContent = "La contraseña es obligatoria";
    isValid = false;
  } else if (!passwordPattern.test($passwordInput.value.trim())) {
    $passwordError.textContent =
      "La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial";
    isValid = false;
  }

  // Validar campo Confirmar Contraseña
  if ($confirmPasswordInput.value.trim() === "") {
    $confirmPasswordError.textContent =
      "La confirmación de la contraseña es obligatoria";
    isValid = false;
  } else if (
    $confirmPasswordInput.value.trim() !== $passwordInput.value.trim()
  ) {
    $confirmPasswordError.textContent =
      "La confirmación no coincide con la contraseña";
    isValid = false;
  }

  // Simular envío si todo es válido
  if (isValid) {
    showLoader();

    setTimeout(() => {
      hideLoader();
      $successMessage.textContent = "Formulario enviado exitosamente";
      $form.reset();

      setTimeout(() => {
        $successMessage.textContent = "";
      }, 3000);
    }, 5000); // Simula el envío durante 5 segundos
  }
}

$form.addEventListener("submit", validateForm);
