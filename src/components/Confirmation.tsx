import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type DialogProps = {
  triggerText: string;
  title: string;
  description: string;
  confirmText: string;
  onConfirm: () => any;
};

export function ReusableDialog({
  triggerText,
  title,
  description,
  confirmText,
  onConfirm,
}: DialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded">
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Button
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function BankTransferDialog() {
  return (
    <ReusableDialog
      title="Enviar regalito💝"
      triggerText="Regalito"
      description="Tu presencia es valiosa para mí, pero también aceptamos transferencias 😜"
      confirmText="Copiar alias"
      onConfirm={() =>
        navigator.clipboard
          .writeText("iariluu")
          .then(() => alert("Alias copiado!"))
      }
    />
  );
}

export function RSVPDialog() {
  const openWpp = () =>
    window
      .open(
        "https://api.whatsapp.com/send/?phone=5493624097680&text=Confirmo%20mi%20asistencia%20al%20XV%20mi%20nombre%20es%20",
        "_blank"
      )!
      .focus();
  return (
    <ReusableDialog
      title="Confirmar asistencia"
      triggerText="Confirmar asistencia"
      description="Al presionar este boton me confirmas tu asistencia con tu nombre"
      confirmText="Confirmar"
      onConfirm={openWpp}
    />
  );
}
