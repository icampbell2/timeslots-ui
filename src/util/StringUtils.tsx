/**
 * A util class for String handling, mimicing the Java Apache StringUtils library.
 *
 * @author Ian Campbell
 */
class StringUtils {

    public static isBlank(value: string): boolean {
        if (value == null) {
            return true;
        }
        return value.trim() === '';
    }
}

export default StringUtils;