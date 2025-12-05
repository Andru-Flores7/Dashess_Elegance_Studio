// API para interactuar con la tabla 'service' en Supabase
import { supabase } from '../SupabaseClient';

/**
 * Obtener todos los servicios
 * @returns {Promise<{success: boolean, data?: Array, error?: any}>}
 */
export const obtenerServicios = async () => {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;
    
    console.log('✅ Servicios obtenidos:', data);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Error al obtener servicios:', error);
    return { success: false, error };
  }
};

/**
 * Obtener un servicio por ID
 * @param {string|number} id - ID del servicio
 * @returns {Promise<{success: boolean, data?: Object, error?: any}>}
 */
export const obtenerServicioPorId = async (id) => {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    
    console.log('✅ Servicio obtenido:', data);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Error al obtener servicio:', error);
    return { success: false, error };
  }
};

/**
 * Buscar servicios por nombre
 * @param {string} termino - Término de búsqueda
 * @returns {Promise<{success: boolean, data?: Array, error?: any}>}
 */
export const buscarServicios = async (termino) => {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .ilike('title', `%${termino}%`);

    if (error) throw error;
    
    console.log('✅ Búsqueda completada:', data);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Error en la búsqueda:', error);
    return { success: false, error };
  }
};

/**
 * Insertar un nuevo servicio
 * @param {Object} servicio - Datos del servicio
 * @returns {Promise<{success: boolean, data?: Object, error?: any}>}
 */
export const insertarServicio = async (servicio) => {
  try {
    const { data, error } = await supabase
      .from('services')
      .insert([servicio])
      .select();

    if (error) throw error;
    
    console.log('✅ Servicio insertado:', data);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Error al insertar servicio:', error);
    return { success: false, error };
  }
};

/**
 * Actualizar un servicio
 * @param {string|number} id - ID del servicio
 * @param {Object} cambios - Datos a actualizar
 * @returns {Promise<{success: boolean, data?: Object, error?: any}>}
 */
export const actualizarServicio = async (id, cambios) => {
  try {
    const { data, error } = await supabase
      .from('services')
      .update(cambios)
      .eq('id', id)
      .select();

    if (error) throw error;
    
    console.log('✅ Servicio actualizado:', data);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Error al actualizar servicio:', error);
    return { success: false, error };
  }
};

/**
 * Eliminar un servicio
 * @param {string|number} id - ID del servicio
 * @returns {Promise<{success: boolean, error?: any}>}
 */
export const eliminarServicio = async (id) => {
  try {
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id);

    if (error) throw error;
    
    console.log('✅ Servicio eliminado');
    return { success: true };
  } catch (error) {
    console.error('❌ Error al eliminar servicio:', error);
    return { success: false, error };
  }
};
