import { getAuth } from 'firebase-admin/auth';
import { initializeApp } from 'firebase-admin/app';
import { document } from 'firebase-functions/v1/firestore';

const auth = getAuth(initializeApp());

export const trigger_exclusao_autenticacao_usuario = document('usuarios/{usuarioId}').onDelete(async (usuario, _context) => {
    if (usuario.get('email')) {
        await auth.deleteUser(usuario.id);
    }
    return true;
});