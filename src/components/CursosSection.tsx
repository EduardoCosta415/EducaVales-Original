"use client";

import { cursos } from "@/data/cursosData";
import { useState, useEffect, ChangeEvent } from "react";
import {
  submitSubscription,
  normalizePhone,
  toSafeNumber,
} from "../../lib/api";

interface Curso {
  id: number;
  titulo: string;
  descricao: string;
  preco: string;
  conteudo?: string[];
}

interface CourseCardProps {
  curso: Curso;
  onOpenModal: (curso: Curso) => void;
}

function CourseCard({ curso, onOpenModal }: CourseCardProps) {
  const conteudo = curso.conteudo || [];

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-lg border border-orange-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-orange-300">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-5 rounded-t-xl">
        <h3 className="text-xl font-bold">{curso.titulo}</h3>
        <div className="w-12 h-1 bg-white mt-2 rounded-full"></div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <p className="text-gray-700 mb-6 leading-relaxed">{curso.descricao}</p>

        <h4 className="font-semibold mb-3 text-orange-600">
          Você vai aprender:
        </h4>
        <ul className="text-gray-700 mb-6 space-y-2">
          {conteudo.slice(0, 3).map((item, index) => (
            <li key={index} className="flex items-start text-sm">
              <svg
                className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 
                  00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 
                  00-1.414 1.414l2 2a1 1 0 001.414 
                  0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold text-orange-600 text-center sm:text-left">
            R$ {curso.preco}
            <span className="text-sm font-normal text-gray-500 block">
              À vista ou parcelado
            </span>
          </div>

          <button
            onClick={() => onOpenModal(curso)}
            className="flex items-center gap-2 bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            WhatsApp
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2a10 10 0 00-8.47 15.62L2 22l4.56-1.48A10 
              10 0 1012 2zm0 18a8 8 0 01-4.23-1.2l-.3-.19-2.71.88.9-2.64-.18-.31A8 
              8 0 1112 20z"
              />
              <path
                d="M17 14.5c-.25-.12-1.47-.72-1.7-.8s-.4-.12-.57.12c-.17.25-.65.8-.8.97-.15.17-.3.2-.55.08a6.51 
              6.51 0 01-1.91-1.18 7.15 7.15 0 
              01-1.33-1.63c-.15-.25 0-.38.11-.5.11-.11.25-.29.38-.44.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.12-.57-1.37-.78-1.87-.2-.48-.4-.42-.57-.43h-.48c-.15 
              0-.4.06-.61.29-.2.25-.8.78-.8 
              1.9s.82 2.21.94 2.36c.12.15 
              1.61 2.46 3.91 3.45.55.24.97.38 
              1.3.49.55.18 1.05.16 1.45.1.44-.06 
              1.37-.56 1.57-1.1.2-.55.2-1.02.15-1.12-.06-.1-.23-.16-.48-.28z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

interface WhatsAppModalProps {
  curso: Curso | null;
  isOpen: boolean;
  onClose: () => void;
}

function WhatsAppModal({ curso, isOpen, onClose }: WhatsAppModalProps) {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string>("");

  if (!isOpen || !curso) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatusMsg("");

    if (!form.nome || !form.telefone || !form.email) {
      setStatusMsg("Preencha todos os campos!");
      return;
    }

    //Montagem da API
    const areaOfInterest = curso.titulo;
    const enterpriseId = toSafeNumber(process.env.NEXT_PUBLIC_ENTERPRISE_ID, 1);

    const payload = {
      name: form.nome.trim(),
      phone: normalizePhone(form.telefone),
      areaOfInterest,
      enterpriseId,
    };

    try {
      setLoading(true);
      await submitSubscription(payload);

      setStatusMsg("Cadastro enviado com sucesso! Abrindo WhatsApp...");
      // Mensagem para o WhatsApp
      const mensagem = `Olá! Meu nome é ${form.nome}, meu telefone é ${form.telefone}, meu e-mail é ${form.email}. Tenho interesse no curso: ${curso.titulo} (R$ ${curso.preco})`;
      const url = `https://wa.me/5531996636957?text=${encodeURIComponent(
        mensagem
      )}`;

      // Abre WhatsApp e fecha modal
      window.open(url, "_blank");
      onClose();
    } catch (err: any) {
      console.error("Erro ao criar lead:", err);
      setStatusMsg(
        err?.message || "Erro ao enviar o cadastro. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative animate-fadeIn overflow-y-auto max-h-[90vh]">
        <h3 className="text-xl font-bold text-orange-600 mb-4">
          Inscrição - {curso.titulo}
        </h3>

        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          className="w-full mb-3 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none text-black placeholder:text-black"
          onChange={handleChange}
          value={form.nome}
          disabled={loading}
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Seu telefone"
          className="w-full mb-3 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none text-black placeholder:text-black"
          onChange={handleChange}
          value={form.telefone}
          disabled={loading}
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          className="w-full mb-3 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none text-black placeholder:text-black"
          onChange={handleChange}
          value={form.email}
          disabled={loading}
        />

        {statusMsg && (
          <p
            className={`mt-1 text-sm ${
              statusMsg.toLowerCase().includes("sucesso")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {statusMsg}
          </p>
        )}

        <div className="flex justify-between mt-4 gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 disabled:opacity-60"
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar para WhatsApp"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente principal
export default function CursosSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCurso, setSelectedCurso] = useState<Curso | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="cursos"
      className="py-16 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4">
            Nossos Cursos Técnicos
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Escolha entre nossos cursos especializados e desenvolva as
            habilidades mais demandadas pelo mercado de trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.slice(0, 6).map((curso, index) => (
            <div
              key={curso.id}
              className={`h-full transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CourseCard curso={curso} onOpenModal={setSelectedCurso} />
            </div>
          ))}
        </div>
      </div>

      <WhatsAppModal
        curso={selectedCurso}
        isOpen={!!selectedCurso}
        onClose={() => setSelectedCurso(null)}
      />
    </section>
  );
}
