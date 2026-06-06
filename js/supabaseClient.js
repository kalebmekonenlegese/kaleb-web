// Single reusable Supabase client and helpers
(function () {
  const cfg = window.SUPABASE_CONFIG || {};
  const SUPABASE_URL = cfg.url || window.SUPABASE_URL || '';
  const SUPABASE_ANON_KEY = cfg.key || window.SUPABASE_ANON_KEY || '';

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('Supabase config not found. Real-time and API calls disabled.');
    window.supabaseClient = null;
    return;
  }

  try {
    const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      realtime: { params: { eventsPerSecond: 10 } }
    });

    const fetchData = async (tableName) => {
      console.log(`fetchData: querying table ${tableName}`);
      const { data, error } = await client.from(tableName).select('*').order('id', { ascending: false });
      if (error) {
        console.error('Supabase fetch error:', error);
        throw error;
      }
      console.log(`Supabase response for ${tableName}:`, data);
      return data || [];
    };

    const subscribeToTable = (tableName, cb) => {
      if (!client.channel) {
        console.warn('Realtime channels not supported in this supabase client.');
        return null;
      }

      const channel = client
        .channel(`realtime:${tableName}`)
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: tableName },
          (payload) => {
            console.log(`realtime event (${tableName}):`, payload);
            try {
              cb && cb(payload);
            } catch (err) {
              console.error('realtime callback error:', err);
            }
          }
        )
        .subscribe((status) => {
          console.log(`subscription status for ${tableName}:`, status);
        });

      return channel;
    };

    window.supabaseClient = {
      client,
      fetchData,
      subscribeToTable
    };

    console.log('Supabase client initialized.');
  } catch (err) {
    console.error('Failed to initialize Supabase client:', err);
    window.supabaseClient = null;
  }
})();
