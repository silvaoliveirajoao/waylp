"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FormularioModal() {
  const [showModal, setShowModal] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [errorTelefone, setErrorTelefone] = useState("");

  const validatePhone = (value) => {
    const phoneRegex = /^\d{10,11}$/;
    setErrorTelefone(!phoneRegex.test(value) ? "Número de telefone inválido. Informe 10 ou 11 dígitos." : "");
    setTelefone(value);
  };

  // Função para tratar o submit
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
  
    try {
      const response = await fetch("/src/pages/googleSheet.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setShowModal(false);
      } else {
        console.error("Erro ao enviar os dados:", response);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-teal-700 text-white border-teal-600 shadow-md hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
      >
        Quero que me chamem.
      </button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-8 w-full max-w-lg shadow-lg relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Informe seus dados de contato
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                    className="mt-1 px-1 block w-full bg-gray-200 border-gray-500 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Telefone (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    placeholder="Somente números"
                    value={telefone}
                    onChange={(e) => validatePhone(e.target.value)}
                    className={`mt-1 px-1 block w-full bg-gray-200 border-gray-500 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                      errorTelefone ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {errorTelefone && <p className="text-red-500 text-sm mt-1">{errorTelefone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="seuemail@exemplo.com"
                    className="mt-1 px-1 block w-full bg-gray-200 border-gray-500 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Destino de Interesse (se houver)
                  </label>
                  <input
                    type="text"
                    name="destino"
                    placeholder="Destino"
                    className="mt-1 px-1 block w-full bg-gray-200 border-gray-500 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Interesse em Serviço Específico (se houver)
                  </label>
                  <input
                    type="text"
                    name="servico"
                    placeholder="Serviço específico"
                    className="mt-1 px-1 block w-full bg-gray-200 border-gray-500 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Horário Ideal para Contato (se houver)
                  </label>
                  <input
                    type="text"
                    name="horario"
                    placeholder="Ex: 9h às 12h"
                    className="mt-1 px-1 block w-full bg-gray-200 border-gray-500 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-teal-700 text-white border-teal-600 shadow-md hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
